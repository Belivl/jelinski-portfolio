import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { SakuraRain2 } from "@/components/ui/SakuraRain2";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import { GoldButton } from "@/components/ui/GoldButton";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowBigDown, Camera, Brush } from "lucide-react";
import {
  HOME_PHOTOGRAPHER_IMAGES,
  HOME_DESIGNER_IMAGES,
  HERO_IMAGES,
} from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { CornerBorders } from "@/components/ui/CornerBorders";

export function Hero() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<"photographer" | "designer" | null>(
    null,
  );
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [dynamicPhotographerImages, setDynamicPhotographerImages] = useState<
    string[]
  >(HOME_PHOTOGRAPHER_IMAGES);
  const [dynamicDesignerImages, setDynamicDesignerImages] =
    useState<string[]>(HOME_DESIGNER_IMAGES);


  useEffect(() => {
    const loadImages = async () => {
      const { siteConfig } = await import("@/config/site");
      const { getExternalDataWithFallback } =
        await import("@/lib/googleSheets");

      const pImages = await getExternalDataWithFallback<{ url: string }>(
        siteConfig.externalData.sheetID,
        siteConfig.externalData.photographerImagesId,
        HOME_PHOTOGRAPHER_IMAGES.map((url) => ({ url })),
        siteConfig.externalData.useExternal,
      );
      setDynamicPhotographerImages(
        pImages.map((item) => item.url).filter(Boolean),
      );

      const dImages = await getExternalDataWithFallback<{ url: string }>(
        siteConfig.externalData.sheetID,
        siteConfig.externalData.designerImagesId,
        HOME_DESIGNER_IMAGES.map((url) => ({ url })),
        siteConfig.externalData.useExternal,
      );
      setDynamicDesignerImages(dImages.map((item) => item.url).filter(Boolean));
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentPhoto = HERO_IMAGES[currentPhotoIndex];
  const photoUrl =
    typeof currentPhoto === "string" ? currentPhoto : currentPhoto.url;
  const isObjectTop =
    typeof currentPhoto !== "string" && currentPhoto.objectTop;

  return (
    <section className="relative min-h-dvh md:min-h-screen flex items-center overflow-hidden bg-background pt-20 border-b border-neutral-400 dark:border-neutral-800">
      <div className="absolute inset-0 z-0 w-full h-full dark:bg-neutral-900 bg-neutral-100">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={photoUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
        <div className="absolute z-10 w-full h-full inset-0 bg-white opacity-60 dark:bg-black dark:opacity-70"></div>
      </div>
      <SakuraRain2 />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          role="heading"
          aria-level={1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 text-foreground mix-blend-difference dark:mix-blend-normal relative uppercase z-50 px-2"
        >
          <div className="text-truncate cursor-default">
            <span className=" tracking-normal text-truncate">
              {t.hero.name}
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-fit my-4 text-truncate ">
            <div
              className="relative font-black tracking-normal z-50  cursor-default hover:text-amber-500 hover:scale-110 transition-transform hover:text-shadow-[0_8px_10px_#432100]"
              onMouseEnter={() => setHovered("photographer")}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative z-200 flex items-center gap-2 group">
                <Camera className="w-8 h-8 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 group-hover:-rotate-15 transition-all" />
                {t.hero.photographer}
              </div>
              <AnimatePresence>
                {hovered === "photographer" && (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -10,
                        scale: 0.8,
                        x: 20,
                        y: -40,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -15,
                        scale: 1,
                        x: -40,
                        y: -100,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "0%", top: "0%" }}
                    >
                      <div className="bg-white p-1 md:p-3 pb-3 md:pb-8 shadow-xl rotate-[-5deg] md:w-48 w-24">
                        <SmartImage
                          src={dynamicPhotographerImages[0]}
                          alt="Photo 1"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -5,
                        scale: 0.8,
                        x: 90,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -5,
                        scale: 1.2,
                        x: 50,
                        y: -40,
                        transition: {
                          delay: 0.1,
                        },
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "20%", top: "100%" }}
                    >
                      <div className="bg-white p-1 md:p-3 pb-3 md:pb-8 shadow-xl -rotate-2 w-24 md:w-44">
                        <SmartImage
                          src={
                            dynamicPhotographerImages[2] ||
                            dynamicPhotographerImages[0]
                          }
                          alt="Photo 3"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: 10,
                        scale: 0.8,
                        x: 30,
                        y: -60,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 10,
                        scale: 1,
                        x: 70,
                        y: -110,
                        transition: {
                          delay: 0.2,
                        },
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "50%", top: "0%" }}
                    >
                      <div className="bg-white p-1 md:p-3 pb-3 md:pb-8 shadow-xl rotate-[5deg] w-24 md:w-40">
                        <SmartImage
                          src={
                            dynamicPhotographerImages[1] ||
                            dynamicPhotographerImages[0]
                          }
                          alt="Photo 2"
                          className="w-full h-auto aspect-3/4 object-cover bg-gray-100"
                        />
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>{" "}
            <div
              className="relative group font-black  duration-300 tracking-normal z-50 inline-block cursor-default hover:text-amber-500 hover:scale-110 transition-all hover:text-shadow-[0_8px_10px_#432100]"
              onMouseEnter={() => setHovered("designer")}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="relative z-200 flex items-center gap-4">
                <span className="font-black lowercase">{t.hero.and}</span>{" "}
                {t.hero.designer}{" "}
                <Brush className="w-8 h-8 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 group-hover:-rotate-15 transition-all" />
              </span>
              <AnimatePresence>
                {hovered === "designer" && (
                  <>
                    <motion.div
                      initial={{
                        opacity: 0,
                        rotate: -10,
                        scale: 0.8,
                        x: -100,
                        y: 0,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 5,
                        scale: 1,
                        x: -100,
                        y: -60,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "0%", top: "0%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl md:w-56 w-24 border border-white/20 ">
                        <SmartImage
                          src={dynamicDesignerImages[0]}
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
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: -5,
                        scale: 1.2,
                        x: 50,
                        y: -70,
                        transition: {
                          delay: 0.1,
                        },
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "50%", top: "0%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl w-24 md:w-48 border border-black/10">
                        <SmartImage
                          src={
                            dynamicDesignerImages[1] || dynamicDesignerImages[0]
                          }
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
                        x: -40,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 10,
                        scale: 1,
                        x: -70,
                        y: -50,
                        transition: {
                          delay: 0.2,
                        },
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute z-100 pointer-events-none"
                      style={{ left: "30%", top: "100%" }}
                    >
                      <div className="bg-white p-1 shadow-2xl w-24 md:w-52 border border-white/10">
                        <SmartImage
                          src={
                            dynamicDesignerImages[2] || dynamicDesignerImages[0]
                          }
                          alt="Design 3"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>{" "}
          </div>
          <div className="text-truncate  cursor-default">{t.hero.location}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" z-0  mt-16  lg:w-fit"
        >
          <div className="flex gap-3 md:gap-6 flex-col md:flex-row ml-4">
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
                className=" w-full sm:w-auto group relative px-8 dark:border-neutral-700 border-neutral-400  dark:hover:bg-neutral-800 hover:bg-neutral-200 text-foreground overflow-visible"
              >
                <CornerBorders
                  isVisible={false}
                  offset="-8px"
                  size="w-3 h-3"
                  className="border-amber-500"
                  thickness="border-t-2"
                />
                {t.hero.portfolio}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        viewport={{ once: true }}
        className="animate-bounce absolute bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2 opacity-50"
      >
        <div className="flex items-center flex-col font-black uppercase text-sm md:text-xl gap-1  animate-pulse  cursor-move">
          {t.hero.more}
          <ArrowBigDown className="w-5 h-5 dark:text-neutral-100  stroke-[3px] group-hover:-rotate-45 transition-all duration-300 ease-out" />
        </div>
      </motion.div>
    </section>
  );
}
