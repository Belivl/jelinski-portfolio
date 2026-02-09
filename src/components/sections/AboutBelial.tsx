import { useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { Coin2 } from "../ui/Coin2";
import { useLanguage } from "@/lib/LanguageContext";

export default function Drag() {
  const constraintsRef = useRef(null);
  const controls = useAnimation();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToss = async () => {
    const targetX = 360 * (2 + Math.floor(Math.random() * 2)); // 720 or 1080
    const targetY = 1; // 0 or 360
    const midZ = 45 + 8 * 45;

    await controls.start({
      rotateX: [0, targetX / 2, targetX],
      rotateY: [0, targetY / 2, targetY],
      rotateZ: [0, midZ, 0],
      scale: [1, 2, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    });

    // Reset to literal 0 so future flips start from base
    controls.set({ rotateX: 0, rotateY: 0, rotateZ: 0 });

    setIsFlipping(false);
  };

  return (
    <div className="relative flex items-center justify-center w-[200px] h-[120px] md:w-[500px] md:h-[300px] pointer-events-auto">
      {/* The "Socket" or Constraint Area */}
      <div
        ref={constraintsRef}
        className="absolute inset-0 rounded-full  pointer-events-none flex items-center justify-center "
      >
        <div className="w-[100px] h-[100px] rounded-full  " />
      </div>

      <motion.div
        drag
        dragSnapToOrigin={true}
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileDrag={{ scale: 2, cursor: "grabbing" }}
        whileHover={{ scale: 1.05 }}
        onTap={handleToss}
        animate={controls}
        className="relative z-20 cursor-grab touch-none flex items-center justify-center w-64 h-64"
        initial={{ y: 0, rotateX: 0 }}
      >
        {/* Floating Idle Animation Wrapper - only active when not flipping */}
        <motion.div
          animate={isFlipping ? {} : { y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          <div className="scale-[0.3] pointer-events-none">
            <Coin2>
              <img
                src="/logo.png"
                alt="Front"
                className="w-[180px] opacity-90"
              />
            </Coin2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function AboutBelial() {
  const { t } = useLanguage();

  return (
    <section className="px-0 py-24 relative">
      <div className="absolute max-w-screen h-screen  z-0 pointer-events-none flex justify-between items-center top-0 left-0 right-0 cursor-default">
        <motion.img
          initial={{ x: "-100%" }}
          animate={{ x: [0, 12, 0], y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          src="/FlameSide.svg"
          alt="Y"
          className=" scale-50 md:scale-100  z-10 mix-blend-overlay opacity-10 dark:opacity-50 -translate-x-1/2 md:-translate-x-[60%]"
        />
        <motion.img
          initial={{ x: "-100%" }}
          animate={{ x: [0, -12, 0], y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          src="/FlameSide.svg"
          alt="Y"
          className="rotate-180 scale-50 md:scale-100 mix-blend-overlay opacity-10 dark:opacity-50 translate-x-1/8 md:translate-x-[60%]"
        />
      </div>
      <div className="container flex flex-col gap-12 justify-center items-center  overflow-clip  mx-auto ">
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
      <div className="container mx-auto ">
        <div className="w-full flex justify-center items-center relative ">
          <div
            id="star"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.img
              initial={{ scale: 0, y: 0 }}
              animate={{
                y: [0, -12, 0],
                scale: 1,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              id="star1"
              src="Star1.svg"
              alt="Star"
              className="starAnim w-[260px] h-[260px]"
            />
          </div>
          <div className="relative z-20">
            <Drag />
          </div>
        </div>
      </div>
    </section>
  );
}
