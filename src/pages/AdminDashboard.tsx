import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { motion } from "motion/react";
import {
  Camera,
  ShieldCheck,
  Database,
  LogOut,
  LayoutDashboard,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_TOOLS = [
  {
    title: "Photo Manager",
    description: "Manage portfolio gallery and metadata",
    icon: Camera,
    path: "/dev/photo-manager",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Security Tests",
    description: "Run spam simulations and protection checks",
    icon: ShieldCheck,
    path: "/dev/security-test",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "Database Tools",
    description: "Maintenance, cleanup and moderation",
    icon: Database,
    path: "/dev/db-tools",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-mono text-sm uppercase tracking-[0.3em]">
              <LayoutDashboard className="w-4 h-4" />
              Administrative Hub
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Dashboard
            </h1>
          </div>

          <Button
            onClick={logout}
            variant="ghost"
            className="text-neutral-400 hover:text-white hover:bg-white/5 font-mono text-xs uppercase tracking-widest gap-2"
          >
            <LogOut className="w-4 h-4" />
            Terminate Session
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADMIN_TOOLS.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={tool.path}
                className="group block relative p-8 bg-white/5 border border-white/10 rounded-4xl hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Tool specific background accent */}
                <div
                  className={`absolute -right-4 -top-4 w-24 h-24 ${tool.bg} blur-3xl group-hover:scale-150 transition-transform duration-700`}
                />

                <div className="relative z-10 space-y-6">
                  <div
                    className={`w-12 h-12 rounded-2xl ${tool.bg} flex items-center justify-center`}
                  >
                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                      System Tool // 0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* System Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 border border-white/5 bg-black/40 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Environment
              </span>
              <span className="text-xs font-mono text-green-500 uppercase">
                Production
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Connectivity
              </span>
              <span className="text-xs font-mono text-amber-500 uppercase">
                Live (Convex)
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                Session Age
              </span>
              <span className="text-xs font-mono text-neutral-300 uppercase">
                Active
              </span>
            </div>
          </div>

          <Link
            to="/"
            className="text-xs font-mono text-neutral-500 hover:text-white flex items-center gap-2 transition-colors"
          >
            Return to Front-end <ExternalLink className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
