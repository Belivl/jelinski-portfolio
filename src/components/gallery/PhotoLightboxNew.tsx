import { useEffect, useCallback, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FilmCanister } from "@/components/gallery/FilmCanister";
import type { Photo } from "@/data/photos.ts";
import { cn } from "@/lib/utils";
import { ScannerControls } from "@/components/gallery/ScannerControls";
import { CommentsSection } from "@/components/gallery/CommentsSection";
import { FilmstripHolder } from "@/components/gallery/FilmstripHolder";
import { useLanguage } from "@/lib/LanguageContext";
import { MechanicalSocialBar } from "@/components/gallery/MechanicalSocialBar";
import { RetroDisplay } from "@/components/gallery/RetroDisplay";
import { SmartImage } from "@/components/ui/SmartImage";

interface PhotoLightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const { t } = useLanguage();
  const currentPhoto = photos[currentIndex];

  const [showComments, setShowComments] = useState(false);
  const [isIntroDone, setIsIntroDone] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  }, [currentIndex, photos.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        // Optional: Toggle play/pause or zoom?
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  /* --- TRANSLATION HELPERS --- */
  const getNestedTranslation = (obj: any, path: string): string | undefined => {
    if (!path) return undefined;
    return path
      .split(".")
      .reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  };

  const translatedById = currentPhoto.id
    ? (t.data.photos as any)[currentPhoto.id] || {}
    : {};

  const displayTitle =
    (currentPhoto.titleKey && getNestedTranslation(t, currentPhoto.titleKey)) ||
    translatedById.title ||
    currentPhoto.title;

  const displayPlace =
    (currentPhoto.placeKey && getNestedTranslation(t, currentPhoto.placeKey)) ||
    translatedById.place ||
    currentPhoto.place;

  /* --- FILMSTRIP LOGIC --- */

  // Load image dimensions to calculate proper offsets
  const [imageAspectRatios, setImageAspectRatios] = useState<
    Record<string, number>
  >({});

  const handleImageLoad = (key: string, width: number, height: number) => {
    setImageAspectRatios((prev) => ({
      ...prev,
      [key]: width / height,
    }));
  };

  // Buffer range: how many photos to render on each side
  const BUFFER = 3;

  const [isMobile, setIsMobile] = useState(false);

  // Track window dimensions for stable calculations on resize
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const STRIP_HEIGHT_VH = isMobile ? 70 : 82;
  const STRIP_HEIGHT_PX = dimensions.height * (STRIP_HEIGHT_VH / 100);

  // Helpers to get width of a photo
  const getPhotoWidth = (photo: Photo) => {
    // Subtract sprockets (36px * 2) from the strip height to get available image height
    const availableHeight = STRIP_HEIGHT_PX - 72;

    // Default ratios based on category if actual is not yet loaded
    const isPortraitCat = photo.category === "portrait";
    const isLandscapeCat = [
      "landscape",
      "cars",
      "travel",
      "street",
      "architecture",
    ].includes(photo.category);

    const defaultRatio = isPortraitCat ? 0.66 : isLandscapeCat ? 1.5 : 1.0;
    const ratio = imageAspectRatios[photo.url] || defaultRatio;

    return availableHeight * ratio;
  };

  const GAP_PX = 36; // Gap between frames

  // Calculate the offsets for the visible window
  const visibleIndices = useMemo(() => {
    const indices = [];
    for (let i = -BUFFER; i <= BUFFER; i++) {
      let idx = (currentIndex + i) % photos.length;
      if (idx < 0) idx += photos.length;
      indices.push({ relativeIndex: i, photoIndex: idx, photo: photos[idx] });
    }
    return indices;
  }, [currentIndex, photos]);

  // Calculate X position for each visible photo relative to the center of the screen
  const getXPosition = (relativeIndex: number) => {
    const centerPhotoWidth = getPhotoWidth(photos[currentIndex]);

    let x = 0;

    if (relativeIndex === 0) return 0;

    if (relativeIndex > 0) {
      x += centerPhotoWidth / 2 + GAP_PX;
      for (let i = 1; i < relativeIndex; i++) {
        let idx = (currentIndex + i) % photos.length;
        x += getPhotoWidth(photos[idx]) + GAP_PX;
      }
      let targetIdx = (currentIndex + relativeIndex) % photos.length;
      x += getPhotoWidth(photos[targetIdx]) / 2;
      return x;
    }

    if (relativeIndex < 0) {
      x -= centerPhotoWidth / 2 + GAP_PX;
      for (let i = -1; i > relativeIndex; i--) {
        let idx = currentIndex + i;
        if (idx < 0) idx += photos.length; // wrap
        x -= getPhotoWidth(photos[idx]) + GAP_PX;
      }
      let targetIdx = currentIndex + relativeIndex;
      if (targetIdx < 0) targetIdx += photos.length;
      x -= getPhotoWidth(photos[targetIdx]) / 2;
      return x;
    }
    return 0;
  };

  const [showInfo, setShowInfo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, delay: 0.4 }, // Wait 0.4s (almost full track exit) then fade
      }}
      className={cn(
        "fixed inset-0 z-1000 bg-black/95 flex items-center justify-center overflow-hidden touch-none",
        isMobile ? "flex-col p-1" : "flex-col",
      )}
      onClick={!isMobile ? onClose : undefined}
    >
      {/* Background Texture / Grain if desired */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />

      {/* 1. TOP BAR (Mobile: Holder w/ Close | Desktop: Part of Scanner) */}
      {isMobile && (
        <div className="w-full max-w-sm mb-2 z-50 pointer-events-auto">
          <FilmstripHolder
            showCloseButton={true}
            onClose={onClose}
            rotation={currentIndex * 120}
          />
        </div>
      )}

      {/* SCANNER UI CONTROLS (Desktop Only) */}
      {!isMobile && (
        <div onClick={(e) => e.stopPropagation()} className="z-50">
          <ScannerControls
            currentIndex={currentIndex}
            totalPhotos={photos.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onIndexChange={onIndexChange}
            onClose={onClose}
            currentPhoto={{
              id: currentPhoto.id,
              title: displayTitle,
              place: displayPlace,
              date: currentPhoto.date,
              camera: currentPhoto.camera,
            }}
            onCommentClick={() => setShowComments(true)}
          />
        </div>
      )}

      {/* 2. MAIN PHOTO AREA */}
      <div
        className={cn(
          "relative w-full overflow-visible transition-all duration-500 flex items-center justify-center perspective-[1000px]",
          isMobile ? "flex-1" : "h-[80vh] md:h-[90vh] -translate-y-[24px]",
        )}
      >
        {/* FILM CANISTER - Anchored to the right (Desktop Only) */}
        {!isMobile && (
          <motion.div
            initial={{ x: "100vw", opacity: 1 }}
            animate={{
              x: isIntroDone ? "100vw" : 0,
              opacity: isIntroDone ? 0 : 1,
            }}
            exit={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: "circOut" },
            }}
            transition={{
              x: {
                duration: 1.5,
                ease: isIntroDone ? "circIn" : "circOut",
              },
              opacity: {
                duration: 0.5,
              },
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center origin-right"
            style={{
              height: STRIP_HEIGHT_PX * 1.5, // Make it tall matches strip height + gaps
              right: "5%",
            }}
          >
            <FilmCanister
              totalPhotos={photos.length}
              className="h-full w-auto drop-shadow-2xl"
            />
          </motion.div>
        )}

        {/* FILMSTRIP HOLDER (Top Plate) - Desktop Only (Mobile uses separate top bar) */}
        {!isMobile && (
          <motion.div
            initial={{ y: -120 }}
            animate={{ y: -40 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute left-1/2 -translate-x-1/2 z-40 pointer-events-none w-full max-w-[1000px]"
            style={{
              top: `calc(50% - ${STRIP_HEIGHT_PX / 2}px)`,
              transform: `translate(-50%, -85%)`,
            }}
          >
            <FilmstripHolder rotation={currentIndex * 120} />
          </motion.div>
        )}

        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{
            x: "100vw",
            transition: { duration: 0.5, ease: "easeInOut" }, // Explicit duration for reliable exit
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          onAnimationComplete={() => {
            if (!isIntroDone) setIsIntroDone(true);
          }}
          className="relative w-full h-full cursor-grab active:cursor-grabbing"
          onClick={(e) => e.stopPropagation()}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={(_, info) => {
            const swipeThreshold = 50;
            const velocityThreshold = 500;
            if (
              info.offset.x < -swipeThreshold ||
              info.velocity.x < -velocityThreshold
            ) {
              handleNext();
            } else if (
              info.offset.x > swipeThreshold ||
              info.velocity.x > velocityThreshold
            ) {
              handlePrev();
            }
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visibleIndices.map(({ relativeIndex, photoIndex, photo }) => {
              const xPos = getXPosition(relativeIndex);
              const isCenter = relativeIndex === 0;

              return (
                <motion.div
                  key={`${photo.id || photoIndex}-${photoIndex}`}
                  initial={
                    isIntroDone
                      ? {
                          x: xPos + (relativeIndex > 0 ? 800 : -800),
                          opacity: 0,
                          filter: "blur(10px)",
                        }
                      : { x: xPos, opacity: 1, filter: "blur(0px)" }
                  }
                  animate={{
                    x: xPos,
                    opacity: 1,
                    filter: "blur(0px)",
                    zIndex: isCenter ? 20 : 10 - Math.abs(relativeIndex),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 30,
                    mass: 0.8,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col"
                  style={{
                    width: getPhotoWidth(photo),
                    height: STRIP_HEIGHT_PX,
                    position: "absolute",
                  }}
                >
                  {/* Top Sprockets */}
                  <div className="h-9 w-full bg-black  flex justify-between items-start px-1 overflow-hidden shrink-0">
                    {Array.from({
                      length: Math.floor(getPhotoWidth(photo) / 40),
                    }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-5 bg-white/10 rounded-[4px] mx-1 mt-2 border-b-2 border-white/10 shrink-0"
                      />
                    ))}
                  </div>

                  {/* Photo Frame */}
                  <div
                    className="relative flex-1 overflow-hidden border-b-2 border-white/20 inset-shadow-sm/50 flex items-center justify-center"
                    onClick={() => {
                      if (!isCenter) {
                        if (relativeIndex > 0)
                          onIndexChange(
                            (currentIndex + relativeIndex) % photos.length,
                          );
                        else
                          onIndexChange(
                            (currentIndex + relativeIndex + photos.length) %
                              photos.length,
                          );
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-all duration-500 ease-out",
                        !isCenter &&
                          "invert hue-rotate-180 contrast-125 saturate-50 opacity-10",
                      )}
                      style={(() => {
                        if (!isMobile || !isCenter)
                          return { width: "100%", height: "100%" };

                        const ratio = imageAspectRatios[photo.url] || 1.5;
                        const isLandscape = ratio > 1;
                        const vmin = 8; // px margin

                        if (isLandscape) {
                          return {
                            width: `calc((100vw - ${vmin}px) * ${ratio})`,
                            height: `calc(100vw - ${vmin}px)`,
                            rotate: "90deg",
                            transformOrigin: "center center",
                            flexShrink: 0,
                            zIndex: 10,
                          };
                        } else {
                          return {
                            width: `calc(100vw - ${vmin}px)`,
                            height: `calc((100vw - ${vmin}px) / ${ratio})`,
                            rotate: "0deg",
                            flexShrink: 0,
                            zIndex: 10,
                          };
                        }
                      })()}
                    >
                      <SmartImage
                        src={photo.url}
                        alt={photo.title || ""}
                        width={isCenter ? 1600 : 400} // High res for center, low res for strip neighbors
                        priority={true}
                        className={cn(
                          "w-full h-full object-contain rounded-xs transition-shadow duration-500",
                          isMobile &&
                            isCenter &&
                            "shadow-[0_20px_50px_rgba(0,0,0,0.8)]",
                        )}
                        draggable={false}
                        onLoad={(e) => {
                          handleImageLoad(
                            photo.url,
                            e.currentTarget.naturalWidth,
                            e.currentTarget.naturalHeight,
                          );
                        }}
                      />
                    </div>

                    {/* Film Edge Numbers / Marking */}
                    <div className="absolute bottom-8 -left-2 text-[10px] font-mono text-amber-500/50 -rotate-90 origin-bottom-right">
                      {photoIndex + 1} A
                    </div>
                  </div>

                  {/* Bottom Sprockets */}
                  <div className="h-9 w-full bg-black  flex justify-between items-end px-1 overflow-hidden shrink-0">
                    {Array.from({
                      length: Math.floor(getPhotoWidth(photo) / 40),
                    }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-5 bg-white/10 rounded-[4px] mx-1 mb-2 border-b-2 border-white/10 "
                      />
                    ))}
                  </div>

                  {/* FILM CONNECTOR (Right Side Gap Filler) */}
                  <div className="absolute top-0 bottom-0 right-[-40px] w-[40px] bg-black flex flex-col z-10 pointer-events-none">
                    {/* Connector Top Sprockets */}
                    <div className="h-9 w-full flex items-start justify-center mt-2">
                      <div className="w-4 h-5 bg-white/10 rounded-[4px] mx-1  border-b-2 border-white/10 " />
                    </div>
                    {/* Connector Body */}
                    <div className="flex-1 bg-black border-y-[6px] border-black" />
                    {/* Connector Bottom Sprockets */}
                    <div className="h-9 w-full flex items-end justify-center mb-2">
                      <div className="w-4 h-5 bg-white/10 rounded-[4px] mx-1  border-b-2 border-white/10 " />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 3. BOTTOM BAR (Mobile Only) */}
      {isMobile && (
        <div className="w-full z-50 pointer-events-auto mt-auto flex justify-center">
          <MechanicalSocialBar
            variant="mobile"
            photoId={currentPhoto.id || ""}
            onCommentClick={() => setShowComments(true)}
            onInfoClick={() => setShowInfo(true)}
          />
        </div>
      )}

      {/* Info Modal / Overlay for mobile */}
      <AnimatePresence>
        {isMobile && showInfo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInfo(false)}
              className="fixed inset-0 bg-black/80 z-60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 inset-x-0 z-70 bg-neutral-900 border-t border-white/10 rounded-t-4xl shadow-2xl p-6 flex flex-col items-center"
            >
              <div className="w-12 h-1 bg-white/10 rounded-full mb-6" />
              <RetroDisplay
                title={displayTitle}
                place={displayPlace}
                date={currentPhoto.date}
                camera={currentPhoto.camera}
                className="w-full max-w-sm"
              />
              <button
                onClick={() => setShowInfo(false)}
                className="mt-8 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white/50 font-mono text-sm uppercase tracking-widest active:bg-white/10 transition-colors"
              >
                Close Info
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Comments Modal */}
      <AnimatePresence>
        {showComments && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowComments(false);
              }}
              className="fixed inset-0 bg-black/80 z-60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-0 inset-x-0 z-70 bg-[#111] border-t border-white/10 rounded-t-4xl shadow-2xl h-[85vh] flex flex-col max-w-2xl mx-auto w-full"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <h3 className="text-xl  text-amber-500 uppercase font-bold ">
                  {t.comments.comments}
                </h3>
                <button
                  onClick={() => setShowComments(false)}
                  className="text-white/50 hover:text-white font-mono text-sm"
                >
                  {t.comments.close}
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {currentPhoto.id ? (
                  <CommentsSection photoId={currentPhoto.id as string} />
                ) : (
                  <div className="text-white/50">{t.comments.unavailable}</div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
