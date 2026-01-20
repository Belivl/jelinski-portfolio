import { motion } from "motion/react";
import { Power, ArrowLeft, ArrowRight } from "lucide-react";
import { RetroDisplay } from "./RetroDisplay";
import { MechanicalButton } from "./MechanicalButton";
import { AnalogDial } from "./AnalogDial";
import { MechanicalSocialBar } from "./MechanicalSocialBar";
import { GlowContent } from "./GlowContent";

interface ScannerControlsProps {
  currentIndex: number;
  totalPhotos: number;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  currentPhoto: {
    id?: string;
    title?: string;
    place?: string;
    date?: string;
    camera?: string;
  };
  onCommentClick?: () => void;
}

export function ScannerControls({
  currentIndex,
  totalPhotos,
  onPrev,
  onNext,
  onIndexChange,
  onClose,
  currentPhoto,
  onCommentClick,
}: ScannerControlsProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-center  pointer-events-none">
      {/* Main Control Panel - Floating/Docked */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 1 }}
        className="pointer-events-auto bg-[#1a1a1a] border-t-2 border-l border-white/5 shadow-[0_-10px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-t-xl md:rounded-xl px-2 md:px-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-6xl w-full plastic-texture overflow-hidden"
      >
        {/* Left Section: Power & Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block scale-75 origin-center">
            <div className="w-[140px] h-[140px] grid place-items-center  bg-black rounded-full">
              <AnalogDial
                currentIndex={currentIndex}
                totalPhotos={totalPhotos}
                onIndexChange={onIndexChange}
              />
            </div>
          </div>

          {/* Reusing SocialBar logic but wrapping in buttons if needed, or just placing it.
               The user asked for mechanical buttons. Let's wrap social interactions.
           */}
          <div className="flex items-center gap-2">
            {/* We can use the existing SocialBar or rebuild manual triggers. 
                 For now, let's keep it simple and authentic to the request.
                 I'll add a comment trigger manually since SocialBar handles its own state mostly.
                 But Social Bar is complex (likes, views). Let's just drop SocialBar here but styled?
                 Actually, fitting SocialBar into this "Scanner" theme is tricky.
                 Let's maintain the "Scanner" vibe but allow SocialBar to exist or reconstruct it.
                 For now, let's just add the Comment toggle ensuring functionality.
             */}
            {currentPhoto.id && !currentPhoto.id.startsWith("gallery-") && (
              <MechanicalSocialBar
                photoId={currentPhoto.id}
                onCommentClick={onCommentClick}
              />
            )}
          </div>
        </div>
        {/* Center Section: Display */}
        <div className="flex-1 w-full md:w-auto">
          <RetroDisplay
            title={currentPhoto.title}
            place={currentPhoto.place}
            date={currentPhoto.date}
            camera={currentPhoto.camera}
            className="w-full"
          />
        </div>

        {/* Right Section: Analog Control & Social */}
        <div className="flex items-center gap-12">
          <div className="flex gap-4">
            <div className="grid place-items-center p-[2px] bg-black rounded-sm">
              <MechanicalButton
                onClick={onPrev}
                className="w-14 h-14 -translate-y-[2px]"
              >
                <GlowContent blurAmount="blur-sm" glowOpacity="opacity-40">
                  <ArrowLeft className="w-6 h-6" />
                </GlowContent>
              </MechanicalButton>
            </div>
            <div className="grid place-items-center p-[2px] bg-black rounded-sm">
              <MechanicalButton
                onClick={onNext}
                className="w-14 h-14 -translate-y-[2px]"
              >
                <GlowContent blurAmount="blur-sm" glowOpacity="opacity-40">
                  <ArrowRight className="w-6 h-6" />
                </GlowContent>
              </MechanicalButton>
            </div>
          </div>
          <div className="grid place-items-center p-[2px] bg-black rounded-sm mr-4">
            <MechanicalButton
              onClick={onClose}
              variant="danger"
              active={true}
              className="w-14 h-14 -translate-y-[2px]"
              aria-label="Close"
            >
              <Power className="w-6 h-6" />
            </MechanicalButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
