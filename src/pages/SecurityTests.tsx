import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { getVisitorId } from "@/lib/visitor";
import {
  Shield,
  AlertTriangle,
  Play,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
import { getPhotos } from "@/data/photos";
import { Link } from "react-router-dom";

export function SecurityTests() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [testStats, setTestStats] = useState({
    success: 0,
    blocked: 0,
    error: 0,
  });
  const [targetPhoto, setTargetPhoto] = useState<{
    id: string;
    url: string;
    title?: string;
  } | null>(null);

  const addComment = useMutation(api.comments.add);
  const toggleLike = useMutation(api.stats.toggleLike);

  useEffect(() => {
    // Pick a random photo on load
    const photos = getPhotos();
    if (photos.length > 0) {
      const firstPhoto = photos[0];
      setTargetPhoto({
        id: firstPhoto.id || "unknown",
        url: firstPhoto.url,
        title: firstPhoto.title,
      });
    }
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
  };

  const runCommentSpamTest = async (sequential = false) => {
    setIsRunning(true);
    setLogs([]);
    setTestStats({ success: 0, blocked: 0, error: 0 });
    addLog(
      `🚀 Starting Comment Spam Test (${
        sequential ? "Sequential" : "Rapid Fire"
      })...`
    );

    if (!targetPhoto) {
      addLog("⚠️ No target photo selected");
      setIsRunning(false);
      return;
    }

    const vid = await getVisitorId();
    addLog(`Visitor ID: ${vid}`);
    addLog(`Target Photo: ${targetPhoto.title || targetPhoto.id}`);

    let success = 0;
    let blocked = 0;
    let errors = 0;

    const totalRequests = 10; // Reduced for efficiency in testing

    for (let i = 0; i < totalRequests; i++) {
      const p = addComment({
        photoId: targetPhoto.id,
        content: `Spam test comment ${i} - ${Date.now()}`,
        authorAlias: "SpamBot",
        visitorId: vid,
      })
        .then(() => {
          success++;
          addLog(`✅ Success (Request ${i})`);
        })
        .catch((err) => {
          if (
            err.message.includes("Too many requests") ||
            err.message.includes("Rate limit")
          ) {
            blocked++;
            addLog(`❌ Blocked (Request ${i}): ${err.message}`);
          } else {
            errors++;
            addLog(`⚠️ Error (Request ${i}): ${err.message}`);
          }
        });

      if (sequential) {
        await p;
      } else {
        await new Promise((r) => setTimeout(r, 50));
      }
    }

    if (!sequential) {
      await new Promise((r) => setTimeout(r, 2000));
    }

    setTestStats({ success, blocked, error: errors });
    addLog("🏁 Comment Test Completed");
    setIsRunning(false);
  };

  const runLikeSpamTest = async () => {
    if (!targetPhoto) return;

    setIsRunning(true);
    setLogs([]);
    setTestStats({ success: 0, blocked: 0, error: 0 });
    addLog("🚀 Starting Like Spam Test (10 toggles)...");

    const vid = await getVisitorId();
    addLog(`Visitor ID: ${vid}`);
    addLog(`Target Photo: ${targetPhoto.title || targetPhoto.id}`);

    let success = 0;
    let blocked = 0;
    let errors = 0;

    for (let i = 0; i < 10; i++) {
      try {
        await toggleLike({ photoId: targetPhoto.id, visitorId: vid });
        success++;
        addLog(`✅ Success (Request ${i})`);
      } catch (err: any) {
        if (
          err.message.includes("Too many requests") ||
          err.message.includes("Rate limit")
        ) {
          blocked++;
          addLog(`❌ Blocked (Request ${i}): ${err.message}`);
        } else {
          errors++;
          addLog(`⚠️ Error (Request ${i}): ${err.message}`);
        }
      }
      await new Promise((r) => setTimeout(r, 50));
    }

    setTestStats({ success, blocked, error: errors });
    addLog("🏁 Like Test Completed");
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-20 max-w-4xl mx-auto text-white">
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-white/40 hover:text-amber-500 transition-colors mb-8 font-mono text-xs uppercase tracking-widest group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>
      <div className="flex items-center gap-4 mb-8">
        <Shield className="w-10 h-10 text-amber-500" />
        <div>
          <h1 className="text-3xl font-bold">Security Verification</h1>
          <p className="text-white/60">
            Simulate spam attacks to verify rate limiting policies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* Target Photo Preview */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-amber-400" /> Target
            </h2>
            {targetPhoto ? (
              <div className="flex gap-4 items-start">
                <img
                  src={targetPhoto.url}
                  alt="Target"
                  className="w-24 h-24 object-cover rounded-md border border-white/20"
                />
                <div className="space-y-2">
                  <p className="font-semibold text-lg">
                    {targetPhoto.title || "Untitled"}
                  </p>
                  <p className="text-xs text-white/50 font-mono break-all">
                    {targetPhoto.id}
                  </p>
                  <button
                    onClick={() => {
                      const photos = getPhotos();
                      const random =
                        photos[Math.floor(Math.random() * photos.length)];
                      setTargetPhoto({
                        id: random.id || "unknown",
                        url: random.url,
                        title: random.title,
                      });
                    }}
                    className="text-xs flex items-center gap-1 text-amber-400 hover:text-amber-300"
                  >
                    <RefreshCw className="w-3 h-3" /> Change Target
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-red-400">Error loading photos</p>
            )}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Attack
              Simulation
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => runCommentSpamTest(false)}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/50 p-4 rounded-lg transition-colors disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-current" />
                Run Comment Spam Test (Rapid Fire)
              </button>

              <button
                onClick={() => runCommentSpamTest(true)}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 border border-blue-500/50 p-4 rounded-lg transition-colors disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-current" />
                Run Comment Check (Sequential)
              </button>

              <button
                onClick={runLikeSpamTest}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 border border-orange-500/50 p-4 rounded-lg transition-colors disabled:opacity-50"
              >
                <Play className="w-4 h-4 fill-current" />
                Run Like Spam Test (Rapid Toggle)
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">
                  {testStats.success}
                </div>
                <div className="text-xs text-green-200/60 uppercase tracking-widest">
                  Allowed
                </div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                <div className="text-2xl font-bold text-red-400">
                  {testStats.blocked}
                </div>
                <div className="text-xs text-red-200/60 uppercase tracking-widest">
                  Blocked
                </div>
              </div>
              <div className="bg-yellow-500/10 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">
                  {testStats.error}
                </div>
                <div className="text-xs text-yellow-200/60 uppercase tracking-widest">
                  Errors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logs */}
        <div className="bg-black/50 border border-white/10 rounded-xl p-4 h-[500px] overflow-hidden flex flex-col">
          <h3 className="text-sm font-semibold text-white/40 mb-2 uppercase tracking-wider">
            Execution Log
          </h3>
          <div className="flex-1 overflow-y-auto font-mono text-xs space-y-1 p-2">
            {logs.length === 0 && (
              <span className="text-white/20 italic">Waiting to start...</span>
            )}
            {logs.map((log, i) => (
              <div
                key={i}
                className={`
                        ${log.includes("✅") ? "text-green-400" : ""}
                        ${log.includes("❌") ? "text-red-400 font-bold" : ""}
                        ${log.includes("⚠️") ? "text-yellow-400" : ""}
                        ${
                          log.includes("🚀") || log.includes("🏁")
                            ? "text-white border-b border-white/10 pb-1 mt-2 mb-1"
                            : "text-white/70"
                        }
                    `}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
