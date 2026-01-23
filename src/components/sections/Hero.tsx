import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { SakuraRain2 } from "@/components/ui/SakuraRain2";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import { GoldButton } from "@/components/ui/GoldButton";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  HOME_PHOTOGRAPHER_IMAGES,
  HOME_DESIGNER_IMAGES,
  HERO_IMAGES,
} from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";

export function Hero() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<"photographer" | "designer" | null>(
    null,
  );
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  const currentPhoto = HERO_IMAGES[currentPhotoIndex];
  const photoUrl =
    typeof currentPhoto === "string" ? currentPhoto : currentPhoto.url;
  const isObjectTop =
    typeof currentPhoto !== "string" && currentPhoto.objectTop;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0 w-full h-full dark:bg-black bg-neutral-100/10">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={photoUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <SmartImage
              src={photoUrl}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${
                isObjectTop ? "object-top" : "object-center"
              }`}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-200 via-neutral-200 to-neutral-200 dark:from-neutral-900 dark:via-black dark:to-black opacity-20" />
      </div>
      <SakuraRain2 />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 text-foreground mix-blend-difference dark:mix-blend-normal relative uppercase z-50 px-2"
        >
          <div className="whitespace-nowrap">
            {t.hero.title}{" "}
            <span className=" tracking-normal">{t.hero.name}</span>
          </div>
          <div className="flex items-center gap-6 w-fit my-4 whitespace-nowrap">
            <span
              className="relative font-script1 tracking-normal z-50 lowercase cursor-pointer hover:text-amber-500 hover:scale-110 transition-transform hover:text-shadow-[0_0_15px_#000]"
              onMouseEnter={() => setHovered("photographer")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative z-200">{t.hero.photographer}</div>
              <AnimatePresence>
                {hovered === "photographer" && (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -10,
                        scale: 0.8,
                        x: -50,
                        y: -50,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -15,
                        scale: 1,
                        x: -120,
                        y: -100,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "0%", top: "0%" }}
                    >
                      <div className="bg-white p-3 pb-8 shadow-xl rotate-[-5deg] w-48">
                        <SmartImage
                          src={HOME_PHOTOGRAPHER_IMAGES[0]}
                          alt="Photo 1"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: 10,
                        scale: 0.8,
                        x: 50,
                        y: -80,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 15,
                        scale: 1,
                        x: 100,
                        y: -150,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "50%", top: "0%" }}
                    >
                      <div className="bg-white p-3 pb-8 shadow-xl rotate-[5deg] w-40">
                        <SmartImage
                          src={HOME_PHOTOGRAPHER_IMAGES[1]}
                          alt="Photo 2"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -5,
                        scale: 0.8,
                        x: 0,
                        y: 50,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -5,
                        scale: 1,
                        x: 0,
                        y: 80,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "20%", top: "100%" }}
                    >
                      <div className="bg-white p-3 pb-8 shadow-xl -rotate-2 w-44">
                        <SmartImage
                          src={HOME_PHOTOGRAPHER_IMAGES[2]}
                          alt="Photo 3"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </span>{" "}
            <span className="font-black lowercase">{t.hero.and}</span>{" "}
            <span
              className="relative font-script1 tracking-normal z-50 lowercase inline-block cursor-pointer hover:text-amber-500 hover:scale-110 transition-transform hover:text-shadow-[0_0_15px_#000]"
              onMouseEnter={() => setHovered("designer")}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="relative z-200">{t.hero.designer}</span>
              <AnimatePresence>
                {hovered === "designer" && (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -10,
                        scale: 0.8,
                        x: -100,
                        y: -50,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 5,
                        scale: 1,
                        x: -180,
                        y: -80,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "0%", top: "0%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl w-56 border border-white/20">
                        <SmartImage
                          src={HOME_DESIGNER_IMAGES[0]}
                          alt="Design 1"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: 0,
                        scale: 0.8,
                        x: 100,
                        y: -100,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -5,
                        scale: 1,
                        x: 70,
                        y: -70,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "50%", top: "0%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl w-48 border border-black/10">
                        <SmartImage
                          src={HOME_DESIGNER_IMAGES[1]}
                          alt="Design 2"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: 0,
                        scale: 0.8,
                        x: 20,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 10,
                        scale: 1,
                        x: -70,
                        y: -20,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "30%", top: "100%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl w-52 border border-white/10">
                        <SmartImage
                          src={HOME_DESIGNER_IMAGES[2]}
                          alt="Design 3"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </span>{" "}
          </div>
          <div className="whitespace-nowrap">{t.hero.location}</div>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col z-0 sm:flex-row gap-4 justify-start items-stretch sm:items-center mt-16 px-4"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <GoldButton className="w-full sm:w-auto hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all duration-300 ease-out">
              {t.hero.contact}{" "}
              <ArrowRight className="ml-2 w-5 h-5 text-neutral-800 stroke-[3px] group-hover:-rotate-45 transition-all duration-300 ease-out" />
            </GoldButton>
          </Link>
          <Link to="/gallery" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto group relative px-8 dark:border-white/20  dark:hover:bg-white/10 hover:bg-neutral-100 text-foreground overflow-visible"
            >
              <span className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              {t.hero.portfolio}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
