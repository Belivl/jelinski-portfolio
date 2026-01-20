import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Simulate a bit of network delay for "weight"
    await new Promise((r) => setTimeout(r, 800));

    const success = login(password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-[#050505] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-neutral-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-neutral-900 border border-white/10 mb-6 group">
            <Shield className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 font-mono">
            ACCESS PROTOCOL
          </h1>
          <p className="text-neutral-400 font-mono text-sm uppercase tracking-widest">
            Administrative Clearance Required
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 ml-4">
                Encryption Key
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`h-14 bg-black/40 border-white/5 text-white placeholder:text-neutral-700 rounded-2xl pl-12 pr-12 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 font-mono ${
                    error ? "border-red-500/50 bg-red-500/5" : ""
                  }`}
                  disabled={isSubmitting}
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-600" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="text-red-400 text-xs font-mono uppercase tracking-wider text-center"
                >
                  Invalid Access Token
                </motion.p>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isSubmitting || !password}
              className="w-full h-14 bg-white text-black hover:bg-neutral-200 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
                  </span>
                ) : (
                  <>
                    AUTHORIZE{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
          Secure Environment &copy; {new Date().getFullYear()} Photo Portfolio
        </p>
      </motion.div>
    </div>
  );
}
