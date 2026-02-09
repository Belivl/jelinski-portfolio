import { useState } from "react";
import { motion } from "motion/react";
import { Send, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getVisitorId } from "@/lib/visitor";
import { useLanguage } from "@/lib/LanguageContext";

import { CONVEX_ENABLED } from "@/lib/convex-status";

interface Comment {
  _id: string;
  content: string;
  authorAlias: string;
  _creationTime: number;
}

interface CommentsSectionProps {
  photoId: string;
}

export function CommentsSection({ photoId }: CommentsSectionProps) {
  const comments =
    useQuery(api.comments.getApproved, CONVEX_ENABLED ? { photoId } : "skip") ||
    [];
  const addComment = useMutation(api.comments.add);

  const [newComment, setNewComment] = useState("");
  const [alias, setAlias] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [postStatus, setPostStatus] = useState<
    "idle" | "success" | "rate_limit" | "error"
  >("idle");

  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (!CONVEX_ENABLED) {
      setPostStatus("error");
      console.warn("Commenting disabled in offline mode");
      return;
    }

    setIsPosting(true);
    setPostStatus("idle");

    try {
      const vid = await getVisitorId();

      await addComment({
        photoId,
        content: newComment.trim(),
        authorAlias: alias.trim() || "Anonymous",
        visitorId: vid,
      });

      setPostStatus("success");
      setNewComment("");
      // Don't add to list immediately because it needs approval
    } catch (err) {
      console.error(err);
      setPostStatus("error");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 pb-12">
      <div className="flex items-center gap-2 text-white mb-6">
        <MessageCircle className="w-5 h-5 text-amber-500" />
        <h3 className="text-lg font-semibold tracking-wide">
          {t.comments.comments}
        </h3>
      </div>

      {/* Comment List */}
      <div className="space-y-6 mb-8">
        {comments.length === 0 && comments !== undefined && (
          <p className="text-white/40 italic text-sm">
            {t.comments.noComments}
          </p>
        )}

        {(comments as Comment[]).map((comment) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={comment._id}
            className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/5"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-amber-500/90 text-sm">
                {comment.authorAlias || "Anonymous"}
              </span>
              <span className="text-xs text-white/30">
                {new Date(comment._creationTime).toLocaleDateString()}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">
              {comment.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 rounded-xl p-1 border border-white/10 focus-within:border-amber-500/50 transition-colors"
      >
        <div className="p-3 space-y-3">
          <input
            type="text"
            placeholder={t.comments.name}
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/20 outline-none border-b border-white/5 pb-2 focus:border-white/20 transition-colors"
            maxLength={30}
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={t.comments.share}
            spellCheck="false"
            className="w-full bg-transparent text-sm text-white/90 placeholder:text-white/30 resize-none outline-none min-h-[80px]"
            maxLength={500}
            required
          />
        </div>

        <div className="flex justify-between items-center bg-black/20 p-2 rounded-b-lg">
          <div className="text-xs px-2">
            {postStatus === "success" && (
              <span className="text-green-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {t.comments.approval}
              </span>
            )}
            {postStatus === "rate_limit" && (
              <span className="text-red-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {t.comments.tooFast}
              </span>
            )}
            {postStatus === "error" && (
              <span className="text-red-400">{t.comments.errorPost}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isPosting || !newComment.trim()}
            className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {isPosting ? (
              "Sending..."
            ) : (
              <>
                {t.comments.post} <Send className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      </form>
      <p className="text-[10px] text-white/30 text-center mt-4">
        {t.comments.moderated}
      </p>
    </div>
  );
}
