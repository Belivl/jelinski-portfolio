import { motion } from "motion/react";
import { Coin2 } from "../ui/Coin2";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutBelial() {
  const { t } = useLanguage();
  return (
    <section className="px-0 py-24 relative container mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-0 pointer-events-none ">
        <motion.img
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src="/FlameSide.svg"
          alt="Y"
          className="fixed top-1/2 -translate-y-1/2 left-0 scale-50 md:scale-100 origin-left  z-10 mix-blend-overlay opacity-5 dark:opacity-40"
        />
        <motion.img
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          src="/FlameSide.svg"
          alt="Y"
          className=" fixed top-1/2 -translate-y-1/2 right-0 rotate-180 scale-50 md:scale-100 origin-left translate-x-full mix-blend-overlay opacity-5 dark:opacity-40 "
        />
      </div>
      <div className="container flex flex-col gap-12 justify-center items-center mx-auto">
        <span className="text-[64px] font-script1">Belial</span>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="text-center text-[20px] md:text-[39px] font-script1 relative font-bold text-balance tracking-wide w-2/3">
            "{t.projects.belialMeaning}"
            <span className="uppercase dark:text-[#F2F0EC] opacity-5 font-bold text-[100px] md:text-[200px]  absolute top-4 left-1/2 -translate-x-1/2 -translate-y-[40%] font-sans pointer-events-none">
              Belial
            </span>
          </div>
          <div className="font-light italic text-sm tracking-wider">
            {t.projects.source}
          </div>
        </div>
      </div>
      <div className="container mx-auto pointer-events-none">
        <div className="w-full flex justify-center items-center relative scale-50">
          <div
            id="star"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img id="star1" src="Star1.svg" alt="Star" className="starAnim" />
          </div>
          <Coin2>
            <img src="logo.png" alt="Front" className="w-[300px]" />
          </Coin2>
        </div>
      </div>
    </section>
  );
}
