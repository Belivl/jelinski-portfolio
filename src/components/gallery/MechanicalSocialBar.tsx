import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, MessageCircle, Share2, Check, Info } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getVisitorId } from "@/lib/visitor";
import { MechanicalButton } from "./MechanicalButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MiniCRTDisplay } from "./MiniCRTDisplay";
import { GlowContent } from "./GlowContent";

interface MechanicalSocialBarProps {
  photoId: string;
  onCommentClick?: () => void;
  onInfoClick?: () => void;
  variant?: "desktop" | "mobile";
}

export function MechanicalSocialBar({
  photoId,
  onCommentClick,
  onInfoClick,
  variant = "desktop",
}: MechanicalSocialBarProps) {
  const [visitorId, setVisitorId] = useState<string>("");

  useEffect(() => {
    getVisitorId().then(setVisitorId);
  }, []);

  const stats = useQuery(api.stats.getStats, {
    photoId,
    visitorId: visitorId || "loading",
  });

  const commentsCount = useQuery(api.comments.countApproved, { photoId }) ?? 0;
  const toggleLike = useMutation(api.stats.toggleLike);
  const registerView = useMutation(api.stats.registerView);

  const likes = stats?.likesCount ?? 0;
  const hasLiked = stats?.hasLiked ?? false;
  const isLoading = stats === undefined;

  const hasLoggedView = useRef(false);

  useEffect(() => {
    if (photoId && visitorId && !hasLoggedView.current) {
      registerView({ photoId, visitorId });
      hasLoggedView.current = true;
    }
  }, [photoId, visitorId, registerView]);

  // Reset view logged state when photoId changes
  useEffect(() => {
    hasLoggedView.current = false;
  }, [photoId]);

  const [isCopied, setIsCopied] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const handleShare = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("photoId", photoId);
      await navigator.clipboard.writeText(url.toString());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleToggleLike = async () => {
    if (isLiking || !visitorId) return;
    setIsLiking(true);

    try {
      await toggleLike({ photoId, visitorId });
    } catch (error) {
      console.error("Error toggling like:", error);
    } finally {
      setIsLiking(false);
    }
  };

  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-4 w-full place-items-center pointer-events-auto py-4  rounded-sm border  bg-[#1a1a1a] border-t-2 border-l border-white/5 shadow-[0_-10px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-t-xl md:rounded-xl px-2 md:px-4  flex-col md:flex-row items-center gap-4 md:gap-8 max-w-6xl plastic-texture overflow-hidden">
        {/* Like */}
        <div className="flex flex-col items-center gap-1">
          <div className="grid place-items-center p-[2px] bg-black rounded-sm">
            <MechanicalButton
              active={hasLiked}
              onClick={handleToggleLike}
              className="w-12 h-12 p-0! -translate-y-[2px] "
              variant={hasLiked ? "danger" : "default"}
            >
              <div className="flex flex-col items-center ">
                <AnimatePresence mode="wait">
                  {hasLiked ? (
                    <motion.div
                      key="liked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Heart className="w-6 h-6 fill-current" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unliked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <GlowContent
                        blurAmount="blur-sm"
                        glowOpacity="opacity-80"
                      >
                        <Heart className="w-6 h-6" />
                      </GlowContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MechanicalButton>
          </div>
          <MiniCRTDisplay value={likes} isLoading={isLoading} />
        </div>
        {/* Comment */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="grid place-items-center p-[2px] bg-black rounded-sm">
            <MechanicalButton
              onClick={onCommentClick}
              className="w-12 h-12 p-0! -translate-y-[2px]"
            >
              <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                <MessageCircle className="w-6 h-6" />
              </GlowContent>
            </MechanicalButton>
          </div>
          <MiniCRTDisplay value={commentsCount} />
        </div>

        {/* Share */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="grid place-items-center p-[2px] bg-black rounded-sm">
            <MechanicalButton
              onClick={handleShare}
              className="w-12 h-12 p-0! -translate-y-[2px]"
            >
              <AnimatePresence mode="wait">
                {isCopied ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 45 }}
                  >
                    <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                      <Check className="w-6 h-6 text-emerald-500" />
                    </GlowContent>
                  </motion.div>
                ) : (
                  <motion.div
                    key="share"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                      <Share2 className="w-6 h-6" />
                    </GlowContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </MechanicalButton>
          </div>
          <MiniCRTDisplay value="share" />
        </div>
        {/* Info */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="grid place-items-center p-[2px] bg-black rounded-sm">
            <MechanicalButton
              onClick={onInfoClick}
              className="w-12 h-12 p-0! -translate-y-[2px]"
            >
              <AnimatePresence mode="wait">
                {isCopied ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 45 }}
                  >
                    <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                      <Check className="w-6 h-6 text-emerald-500" />
                    </GlowContent>
                  </motion.div>
                ) : (
                  <motion.div
                    key="share"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                      <Info className="w-5 h-5 text-amber-500" />
                    </GlowContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </MechanicalButton>
          </div>
          <MiniCRTDisplay value="Info" />
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {/* LIKE BUTTON + CRT */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center gap-1.5">
              <MiniCRTDisplay value={likes} isLoading={isLoading} />
              <div className="grid place-items-center p-[2px] bg-black rounded-sm">
                <MechanicalButton
                  active={hasLiked}
                  onClick={handleToggleLike}
                  className="w-12 h-12 p-0! -translate-y-[2px] "
                  variant={hasLiked ? "danger" : "default"}
                >
                  <div className="flex flex-col items-center ">
                    <AnimatePresence mode="wait">
                      {hasLiked ? (
                        <motion.div
                          key="liked"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Heart className="w-6 h-6 fill-current" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="unliked"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <GlowContent
                            blurAmount="blur-sm"
                            glowOpacity="opacity-80"
                          >
                            <Heart className="w-6 h-6" />
                          </GlowContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </MechanicalButton>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{hasLiked ? "Likes" : "Like"}</p>
          </TooltipContent>
        </Tooltip>

        {/* COMMENT BUTTON + CRT */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center gap-1.5">
              <MiniCRTDisplay value={commentsCount} />
              <div className="grid place-items-center p-[2px] bg-black rounded-sm">
                <MechanicalButton
                  onClick={onCommentClick}
                  className="w-12 h-12 p-0! -translate-y-[2px]"
                >
                  <GlowContent blurAmount="blur-sm" glowOpacity="opacity-80">
                    <MessageCircle className="w-6 h-6" />
                  </GlowContent>
                </MechanicalButton>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Comments</p>
          </TooltipContent>
        </Tooltip>

        {/* SHARE BUTTON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center gap-1.5">
              <div className="h-8 w-16" /> {/* Alignment Spacer */}
              <div className="grid place-items-center p-[2px] bg-black rounded-sm">
                <MechanicalButton
                  onClick={handleShare}
                  className="w-12 h-12 p-0! -translate-y-[2px]"
                >
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.div
                        key="copied"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 45 }}
                      >
                        <GlowContent
                          blurAmount="blur-sm"
                          glowOpacity="opacity-80"
                        >
                          <Check className="w-6 h-6 text-emerald-500" />
                        </GlowContent>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="share"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <GlowContent
                          blurAmount="blur-sm"
                          glowOpacity="opacity-80"
                        >
                          <Share2 className="w-6 h-6" />
                        </GlowContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MechanicalButton>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{isCopied ? "Copied!" : "Share Link"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
