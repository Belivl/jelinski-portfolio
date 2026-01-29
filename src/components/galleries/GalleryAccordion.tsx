import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface GalleryAccordionProps {
  year: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function GalleryAccordion({
  year,
  defaultOpen = false,
  children,
}: GalleryAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isFullyOpen, setIsFullyOpen] = useState(defaultOpen);

  return (
    <div className="w-full mb-4">
      <button
        onClick={() => {
          if (isOpen) setIsFullyOpen(false);
          setIsOpen(!isOpen);
        }}
        className={`w-full flex items-center justify-between p-4 sm:p-6 rounded-2xl border transition-all duration-500 overflow-hidden dark:bg-neutral-900 ${
          isOpen
            ? " border-amber-500 shadow-xl shadow-amber-500/5 mb-4"
            : " dark:border-neutral-700 hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700"
        }`}
      >
        <motion.h2
          className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
            isOpen ? "text-amber-500" : "dark:text-neutral-200"
          }`}
        >
          {year}
        </motion.h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`transition-colors duration-300 ${
            isOpen ? "text-amber-500" : "text-neutral-500"
          }`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: { duration: 0.2 },
              },
            }}
            onAnimationComplete={() => {
              if (isOpen) setIsFullyOpen(true);
            }}
            className={`${
              isFullyOpen ? "overflow-visible" : "overflow-hidden"
            } w-full`}
          >
            <div className="pb-8 space-y-4 w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
