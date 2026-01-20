import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Eye, MessageCircle, Share2, Check } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getVisitorId } from "@/lib/visitor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialBarProps {
  photoId: string;
  onCommentClick?: () => void;
}

export function SocialBar({ photoId, onCommentClick }: SocialBarProps) {
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
  const views = stats?.viewsCount ?? 0;
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

  return (
    <TooltipProvider>
      <div className="flex flex-row items-end gap-4 text-white/80 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleToggleLike}
              disabled={isLoading || isLiking}
              className="group flex flex-col  items-center gap-1 hover:text-foreground transition-colors"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {hasLiked ? (
                    <motion.div
                      key="liked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unliked"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-xs font-medium">
                {isLoading ? "-" : likes}
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{hasLiked ? "Unlike" : "Like"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center gap-1 cursor-default">
              <Eye className="w-6 h-6" />
              <span className="text-xs font-medium">
                {isLoading ? "-" : views}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Total Views</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleShare}
              className="group flex flex-col items-center gap-1 hover:text-white transition-colors mt-2"
            >
              {isCopied ? (
                <Check className="w-6 h-6 text-green-500" />
              ) : (
                <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
              )}
              <span className="text-xs uppercase tracking-wider">
                {isCopied ? "Copied" : "Share"}
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Copy Link to Photo</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onCommentClick}
              className="group flex flex-col items-center gap-1 hover:text-white transition-colors mt-2"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase tracking-wider">
                CHATS({commentsCount})
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>View Comments</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
