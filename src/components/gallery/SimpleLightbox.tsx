import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SmartImage } from "../ui/SmartImage";

interface LightboxImage {
  src: string;
  alt: string;
}

interface SimpleLightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function SimpleLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: SimpleLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync internal index with initialIndex when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-300 flex items-center justify-center bg-black/50 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 p-3 text-white transition-colors z-50 rounded-full bg-neutral-900/50 hover:bg-neutral-800/70 border border-white/10 backdrop-blur-md"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
            <span className="sr-only">Close</span>
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 bottom-6 md:top-1/2 -translate-y-4 md:-translate-y-1/2 p-3 text-white transition-colors z-50 rounded-full bg-neutral-900/50 hover:bg-neutral-800/70 border border-white/10 backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 bottom-6 md:top-1/2 -translate-y-4 md:-translate-y-1/2 p-3 text-white transition-colors z-50 rounded-full bg-neutral-900/50 hover:bg-neutral-800/70 border border-white/10 backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-mono border border-white/10 whitespace-nowrap z-50">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center pointer-events-none p-2 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full pointer-events-auto flex items-center justify-center">
                  <SmartImage
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-w-full max-h-[80dvh] md:max-h-[85vh] w-auto h-auto object-contain shadow-2xl rounded-sm"
                    priority={true}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
