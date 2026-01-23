import { motion } from "motion/react";
import { Coin2 } from "../ui/Coin2";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutBelial() {
  const { t } = useLanguage();
  return (
    <section className="px-0 py-24 container mx-auto">
      <div className="absolute max-w-screen h-screen overflow-clip z-0 pointer-events-none flex justify-between items-center top-0 left-0 right-0">
        <motion.img
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          src="/FlameSide.svg"
          alt="Y"
          className=" scale-50 md:scale-100  z-10 mix-blend-overlay opacity-10 dark:opacity-40 -translate-x-1/4 md:translate-x-0"
        />
        <motion.img
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          src="/FlameSide.svg"
          alt="Y"
          className="rotate-180 scale-50 md:scale-100 mix-blend-overlay opacity-10 dark:opacity-40 translate-x-1/8 md:translate-x-0"
        />
      </div>
      <div className="container flex flex-col gap-12 justify-center items-center mx-auto overflow-clip">
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
      <div className="container mx-auto pointer-events-none overflow-clip">
        <div className="w-full flex justify-center items-center relative ">
          <div
            id="star"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }} //scale up and down
              transition={{ duration: 2, repeat: Infinity }}
              id="star1"
              src="Star1.svg"
              alt="Star"
              className="starAnim w-[260px] h-[260px]"
            />
          </div>
          <Coin2 className="scale-30">
            <img src="logo.png" alt="Front" className="w-[200px]" />
          </Coin2>
        </div>
      </div>
    </section>
  );
}
