import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useMemo } from "react";
import { loadingPhotos } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";

export function LoadingScreen({ onFinished }: { onFinished?: () => void }) {
  const [showViewfinder, setShowViewfinder] = useState(false);
  const [shutterClicked, setShutterClicked] = useState(false);

  const randomPhoto = useMemo(() => {
    try {
      const seenKey = "seenLoadingPhotos";
      const seenIndices: number[] = JSON.parse(
        localStorage.getItem(seenKey) || "[]",
      );

      // Find indices that haven't been seen yet
      let availableIndices = loadingPhotos
        .map((_, i) => i)
        .filter((i) => !seenIndices.includes(i));

      // Reset if all photos have been seen
      if (availableIndices.length === 0) {
        availableIndices = loadingPhotos.map((_, i) => i);
        localStorage.setItem(seenKey, JSON.stringify([]));
      }

      // Select a random index from available pool
      const randomIndex =
        availableIndices[Math.floor(Math.random() * availableIndices.length)];

      // Update seen list
      const updatedSeen =
        availableIndices.length === loadingPhotos.length
          ? [randomIndex]
          : [...seenIndices, randomIndex];
      localStorage.setItem(seenKey, JSON.stringify(updatedSeen));

      return loadingPhotos[randomIndex];
    } catch (e) {
      // Fallback for SSR or localStorage errors
      return loadingPhotos[Math.floor(Math.random() * loadingPhotos.length)];
    }
  }, []);

  useEffect(() => {
    //Implement random image selection
    //const randomImage = Math.floor(Math.random() * 10);
    // Stage 1: Initial grain/darkness
    const timer1 = setTimeout(() => setShowViewfinder(true), 500);

    // Stage 2: Shutter click (PAUSED FOR TWEAKING)
    //
    const timer2 = setTimeout(() => setShutterClicked(true), 3000);

    // Stage 3: Finish (PAUSED FOR TWEAKING)
    const timer3 = setTimeout(() => {
      if (onFinished) onFinished();
    }, 4000);
    //

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Focus Image */}
      <motion.div
        initial={{ filter: "blur(40px) brightness(0.4)", scale: 1.1 }}
        animate={{
          filter:
            showViewfinder && !shutterClicked
              ? "blur(0px) brightness(0.7)"
              : "blur(40px) brightness(0.4)",
          scale: showViewfinder && !shutterClicked ? 1 : 1.1,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <SmartImage
          src={typeof randomPhoto === "string" ? randomPhoto : randomPhoto.url}
          alt="Focus Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          objectTop={
            typeof randomPhoto === "object" ? randomPhoto.objectTop : false
          }
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-to-c from-transparent via-transparent to-black/80" />
      </motion.div>

      {/* Film Grain & Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-screen animate-film-flicker bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Light Leaks */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none bg-radial-to-br from-amber-500/10 via-transparent to-red-500/10 mix-blend-overlay"
      />

      {/* Shutter Flash */}
      <AnimatePresence>
        {shutterClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white z-50 mix-blend-difference"
          />
        )}
      </AnimatePresence>

      {/* Viewfinder UI */}
      <AnimatePresence>
        {showViewfinder && !shutterClicked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex flex-col items-center justify-between px-6 md:px-12 pt-12 md:pt-16 pb-32 md:pb-16"
          >
            {/* Top Bar */}
            <div className="w-full flex justify-between items-start ">
              <div className="flex items-center gap-6 scale-125 md:scale-200 origin-left">
                <div className="w-8 h-8 md:w-10 md:h-10 border border-neutral-300 flex items-center justify-center font-sans text-lg md:text-xl font-medium text-neutral-100">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] text-neutral-100 uppercase tracking-widest mb-1">
                    Exposure
                  </span>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-end gap-1 h-3 relative">
                      {/* <span className="text-center font-bold absolute left-1/2 -translate-x-1/2 -top-8">
                        0.0
                      </span> */}
                      {[...Array(11)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-px bg-neutral-300 ${
                            i % 5 === 0 ? "h-3" : "h-1.5"
                          } ${i === 5 ? "bg-white h-4" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] md:text-xs font-sans text-neutral-200 font-medium">
                      +0.3
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 scale-125 md:scale-200 origin-right">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] md:text-[10px] text-neutral-100 uppercase tracking-widest mb-1">
                    Status
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-white px-[3px] py-px rounded-xs ">
                      <span className="text-[10px] md:text-xs font-sans text-neutral-600 font-bold tracking-tighter uppercase">
                        AF-S
                      </span>
                    </div>
                    <div className="w-10 h-4 md:w-12 md:h-5 border border-neutral-300 rounded-xs p-1 flex gap-1">
                      <div className="flex-1 bg-neutral-100" />
                      <div className="flex-1 bg-neutral-100" />
                      <div className="flex-1 bg-neutral-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Viewfinder Center & Grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Faint Grid */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-[0.05]">
                <div className="border-r-4 border-b-4 border-white" />
                <div className="border-r-4 border-b-4 border-white" />
                <div className="border-b-4 border-white" />
                <div className="border-r-4 border-b-4 border-white" />
                <div className="border-r-4 border-b-4 border-white" />
                <div className="border-b-4 border-white" />
                <div className="border-r-4 border-white" />
                <div className="border-r-4 border-white" />
                <div />
              </div>

              {/* Focus Brackets */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 border-2 rounded-sm border-neutral-600">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-1/2 top-1/2 rounded-sm -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 border-3 border-[#ff5a00]/40 flex items-center justify-center"
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full shadow-[0_0_10px_#ff5a00]" />
                </motion.div>

                {/* Precision Guides */}
                <div className="absolute top-0 left-0 w-8 h-[4px] bg-neutral-400 rounded-sm" />
                <div className="absolute top-0 left-0 w-[4px] h-8 bg-neutral-400 rounded-sm" />

                <div className="absolute top-0 right-0 w-8 h-[4px] bg-neutral-400 rounded-sm" />
                <div className="absolute top-0 right-0 w-[4px] h-8 bg-neutral-400 rounded-sm" />

                <div className="absolute bottom-0 left-0 w-8 h-[4px] bg-neutral-400 rounded-sm" />
                <div className="absolute bottom-0 left-0 w-[4px] h-8 bg-neutral-400 rounded-sm" />

                <div className="absolute bottom-0 right-0 w-8 h-[4px] bg-neutral-400 rounded-sm" />
                <div className="absolute bottom-0 right-0 w-[4px] h-8 bg-neutral-400 rounded-sm" />
              </div>
            </div>

            {/* Bottom Bar Settings */}
            <div className="w-full max-w-4xl grid grid-cols-2 md:flex items-center justify-between border-t border-white/10 pt-6 md:pt-8 mt-auto gap-4 md:gap-0">
              <div className="flex flex-col items-center text-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                <span className="text-sm md:text-xl text-neutral-300 uppercase tracking-[0.2em] mb-1 md:mb-2 font-medium">
                  S
                </span>
                <span className="text-xl md:text-3xl font-sans font-bold text-white tracking-tight">
                  1/125
                </span>
              </div>

              <div className="hidden md:block w-[2px] h-12 bg-white/50" />

              <div className="flex flex-col items-center text-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                <span className="text-sm md:text-xl text-neutral-300 uppercase tracking-[0.2em] mb-1 md:mb-2 font-medium">
                  Aperture
                </span>
                <span className="text-xl md:text-3xl font-sans font-bold text-white tracking-tight">
                  f / 8.0
                </span>
              </div>

              <div className="hidden md:block w-[2px] h-12 bg-white/50" />

              <div className="flex flex-col items-center text-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                <span className="text-sm md:text-xl text-amber-500 uppercase tracking-[0.2em] mb-1 md:mb-2 font-medium ">
                  ISO
                </span>
                <span className="text-xl md:text-3xl font-sans font-bold text-white tracking-tight ">
                  200
                </span>
              </div>

              <div className="hidden md:block w-[2px] h-12 bg-white/50" />

              <div className="flex flex-col items-center text-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                <span className="text-sm md:text-xl text-neutral-300 uppercase tracking-[0.2em] mb-1 md:mb-2 font-medium">
                  White Balance
                </span>
                <span className="text-xl md:text-3xl font-sans font-bold text-white/90 tracking-tight">
                  5600K
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hasselblad Inspired Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shutterClicked ? 0 : 0.8 }}
        className="absolute bottom-6 right-6 md:bottom-16 md:right-16 flex flex-col items-end pointer-events-none text-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center gap-2 md:gap-3 mb-1">
          <div className="w-6 md:w-8 h-px md:h-[2px] bg-amber-500" />
          <span className="font-sans text-sm md:text-xl font-bold tracking-[0.3em] text-white uppercase translate-y-px ">
            Michal Jelinski
          </span>
        </div>
        <span className="font-sans text-[10px] md:text-[14px] text-neutral-300 uppercase tracking-[0.3em] md:tracking-[0.5em] mr-1">
          Photo Portfolio
        </span>
      </motion.div>
    </motion.div>
  );
}
