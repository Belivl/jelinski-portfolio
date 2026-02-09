import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Camera, ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { useLanguage } from "@/lib/LanguageContext";

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const notFoundT = t.notFound;

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-48">
      <SEO title={notFoundT.title} description={notFoundT.description} />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-8"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Camera className=" text-neutral-400 w-64 h-64 transition-all duration-700" />
            {/* <img
              src={cameraImage}
              alt="Vintage camera on a dark surface"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            /> */}
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-mono text-xl shadow-xl border border-white/10"
          >
            404
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {notFoundT.heading}{" "}
            <span className="text-primary italic">{notFoundT.empty}</span>.
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed">
            {notFoundT.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <GoldButton
            onClick={() => navigate("/gallery")}
            className="w-full sm:w-auto hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all duration-300 ease-out"
          >
            <span className="flex items-center">
              <Camera className="w-4 h-4 mr-2 text-neutral-900" />
              {notFoundT.viewGallery}
              <ArrowRight className="ml-2 w-4 h-4 text-neutral-800 stroke-[3px] group-hover:-rotate-45 transition-all duration-300 ease-out" />
            </span>
          </GoldButton>
        </motion.div>
      </div>
    </div>
  );
}
