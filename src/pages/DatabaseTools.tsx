import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  AlertTriangle,
  Filter,
  UserX,
  Fingerprint,
  ChevronLeft,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function DatabaseTools() {
  const [contentFilter, setContentFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [visitorId, setVisitorId] = useState("");
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteByContent = useMutation(api.admin.deleteCommentsByContent);
  const deleteByAuthor = useMutation(api.admin.deleteCommentsByAuthor);
  const wipeVisitor = useMutation(api.admin.wipeVisitorData);
  const wipeTable = useMutation(api.admin.wipeTable);

  const handleDeleteByContent = async () => {
    if (
      !contentFilter.trim() ||
      !confirm(`Delete comments containing "${contentFilter}"?`)
    )
      return;
    setIsLoading(true);
    setStatus("Deleting...");
    try {
      const count = await deleteByContent({ match: contentFilter });
      setStatus(`Success: ${count} comments with "${contentFilter}" deleted.`);
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteByAuthor = async () => {
    if (
      !authorFilter.trim() ||
      !confirm(`Delete comments by author "${authorFilter}"?`)
    )
      return;
    setIsLoading(true);
    setStatus("Deleting...");
    try {
      const count = await deleteByAuthor({ authorAlias: authorFilter });
      setStatus(`Success: ${count} comments by "${authorFilter}" deleted.`);
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWipeVisitor = async () => {
    if (
      !visitorId.trim() ||
      !confirm(`WIPE ALL DATA for Visitor ID "${visitorId}"?`)
    )
      return;
    setIsLoading(true);
    setStatus("Processing wipe...");
    try {
      const count = await wipeVisitor({ visitorId });
      setStatus(`Success: Wiped ${count} data points for ${visitorId}`);
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWipeTableAction = async (
    table: "views" | "likes" | "comments"
  ) => {
    if (
      !confirm(
        `DANGER: Are you SURE you want to DELETE ALL ROWS in '${table}'? This cannot be undone.`
      )
    )
      return;
    if (!confirm(`Double check: REALLY WIPE '${table}'?`)) return;

    setIsLoading(true);
    setStatus(`Wiping ${table}...`);
    try {
      const count = await wipeTable({ table });
      setStatus(`Success: Wiped ${count} rows from ${table}.`);
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 max-w-4xl text-white">
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-white/40 hover:text-amber-500 transition-colors mb-8 font-mono text-xs uppercase tracking-widest group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-red-500 flex items-center gap-3">
        <AlertTriangle className="w-10 h-10" /> Database Cleanup Tools
      </h1>

      {status && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg mb-8 text-center font-mono text-sm text-yellow-500"
        >
          {status}
        </motion.div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Content Cleanup */}
        <section className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-400" /> Cleanup by Content
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">
                Content Match (ILIKE)
              </label>
              <input
                type="text"
                value={contentFilter}
                onChange={(e) => setContentFilter(e.target.value)}
                placeholder="e.g. 'spam_link'"
                className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <Button
              onClick={handleDeleteByContent}
              disabled={isLoading || !contentFilter}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Delete Matching Comments
            </Button>
          </div>
        </section>

        {/* Author Cleanup */}
        <section className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <UserX className="w-5 h-5 text-orange-400" /> Cleanup by Author
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">
                Exact Author Alias
              </label>
              <input
                type="text"
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                placeholder="e.g. 'SpamBot'"
                className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <Button
              onClick={handleDeleteByAuthor}
              disabled={isLoading || !authorFilter}
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Delete User's Comments
            </Button>
          </div>
        </section>

        {/* Visitor Wipe */}
        <section className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 col-span-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-purple-400" /> Wipe Visitor
            Data
          </h2>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">
                Visitor ID (UUID)
              </label>
              <input
                type="text"
                value={visitorId}
                onChange={(e) => setVisitorId(e.target.value)}
                placeholder="e.g. 123e4567-e89b..."
                className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2 text-sm font-mono"
              />
            </div>
            <Button
              onClick={handleWipeVisitor}
              disabled={isLoading || !visitorId}
              variant="destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Wipe All Activity
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Removes all comments, likes, and views for this ID.
          </p>
        </section>

        {/* DANGER ZONE - Table Wipes */}
        <section className="col-span-full mt-8 pt-8 border-t border-red-900/30">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-8 h-8" /> DANGER ZONE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="destructive"
              className="h-auto py-4 flex flex-col gap-2 bg-red-900/20 border-2 border-red-900 hover:bg-red-900"
              onClick={() => handleWipeTableAction("likes")}
              disabled={isLoading}
            >
              <Trash2 className="w-6 h-6" />
              <span>WIPE ALL LIKES</span>
            </Button>
            <Button
              variant="destructive"
              className="h-auto py-4 flex flex-col gap-2 bg-red-900/20 border-2 border-red-900 hover:bg-red-900"
              onClick={() => handleWipeTableAction("views")}
              disabled={isLoading}
            >
              <Trash2 className="w-6 h-6" />
              <span>WIPE ALL VIEWS</span>
            </Button>
            <Button
              variant="destructive"
              className="h-auto py-4 flex flex-col gap-2 bg-red-900/20 border-2 border-red-900 hover:bg-red-900"
              onClick={() => handleWipeTableAction("comments")}
              disabled={isLoading}
            >
              <Trash2 className="w-6 h-6" />
              <span>WIPE ALL COMMENTS</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
