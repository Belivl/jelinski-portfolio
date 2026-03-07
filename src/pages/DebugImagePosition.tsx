import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { HERO_IMAGES, loadingPhotos, type LoadingPhoto } from "@/data/home";

export function DebugImagePosition() {
  const [activeArray, setActiveArray] = useState<"loading" | "hero">("loading");

  // Create local copies of the arrays so we can edit them
  const [localLoading, setLocalLoading] =
    useState<LoadingPhoto[]>(loadingPhotos);
  const [localHero, setLocalHero] = useState<LoadingPhoto[]>(HERO_IMAGES);

  const currentArray = activeArray === "loading" ? localLoading : localHero;
  const setCurrentArray =
    activeArray === "loading" ? setLocalLoading : setLocalHero;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [device, setDevice] = useState<
    "mobile" | "tablet" | "desktop" | "full"
  >("mobile");

  const currentPhoto = currentArray[currentIndex];

  // Parse current photo details
  const currentUrl =
    typeof currentPhoto === "string" ? currentPhoto : currentPhoto.url;
  const currentObjectTop =
    typeof currentPhoto === "object" ? currentPhoto.objectTop : undefined;
  const currentObjectPosition =
    typeof currentPhoto === "object" ? currentPhoto.objectPosition : undefined;

  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, currentArray.length - 1));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const updatePosition = (pos?: string) => {
    const newArray = [...currentArray];
    if (pos) {
      newArray[currentIndex] = { url: currentUrl, objectPosition: pos as any };
    } else {
      // Reset to string if no specific position is needed
      newArray[currentIndex] = currentUrl;
    }
    setCurrentArray(newArray);
  };

  const handleCustomPositionChange = (axis: "x" | "y", value: number) => {
    const current = currentObjectPosition || "50% 50%";
    const parts = current.split(" ");

    let x = parts[0] || "50%";
    let y = parts[1] || "50%";

    // If they were predefined strings instead of percentages, default them to center
    if (!x.includes("%")) x = "50%";
    if (!y.includes("%")) y = "50%";

    if (axis === "x") x = `${value}%`;
    if (axis === "y") y = `${value}%`;

    updatePosition(`${x} ${y}`);
  };

  const currentX =
    currentObjectPosition?.split(" ")[0]?.replace("%", "") || "50";
  const currentY =
    currentObjectPosition?.split(" ")[1]?.replace("%", "") || "50";

  const copyPositionsFromOtherArray = () => {
    if (activeArray === "loading") {
      // Copy from localHero to localLoading
      const newLoading = [...localLoading];
      localHero.forEach((heroPhoto) => {
        const urlStr =
          typeof heroPhoto === "string" ? heroPhoto : heroPhoto.url;
        // Find match in loading
        const loadingIndex = newLoading.findIndex((l) => {
          const lUrl = typeof l === "string" ? l : l.url;
          return lUrl.split("?")[0] === urlStr.split("?")[0];
        });

        if (
          loadingIndex !== -1 &&
          typeof heroPhoto === "object" &&
          heroPhoto.objectPosition
        ) {
          const existing = newLoading[loadingIndex];
          if (typeof existing === "string") {
            newLoading[loadingIndex] = {
              url: existing,
              objectPosition: heroPhoto.objectPosition,
            };
          } else {
            newLoading[loadingIndex] = {
              ...existing,
              objectPosition: heroPhoto.objectPosition,
            };
          }
        }
      });
      setLocalLoading(newLoading);
      alert(`Copied positions from Hero to Loading!`);
    } else {
      // Copy from localLoading to localHero
      const newHero = [...localHero];
      localLoading.forEach((loadingPhoto) => {
        const urlStr =
          typeof loadingPhoto === "string" ? loadingPhoto : loadingPhoto.url;
        // Find match in hero
        const heroIndex = newHero.findIndex((h) => {
          const hUrl = typeof h === "string" ? h : h.url;
          return hUrl.split("?")[0] === urlStr.split("?")[0];
        });

        if (
          heroIndex !== -1 &&
          typeof loadingPhoto === "object" &&
          loadingPhoto.objectPosition
        ) {
          const existing = newHero[heroIndex];
          if (typeof existing === "string") {
            newHero[heroIndex] = {
              url: existing,
              objectPosition: loadingPhoto.objectPosition,
            };
          } else {
            newHero[heroIndex] = {
              ...existing,
              objectPosition: loadingPhoto.objectPosition,
            };
          }
        }
      });
      setLocalHero(newHero);
      alert(`Copied positions from Loading to Hero!`);
    }
  };

  const saveToFile = async () => {
    try {
      const response = await fetch("/api/save-home-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loadingPhotos: localLoading,
          heroPhotos: localHero,
        }),
      });

      if (response.ok) {
        alert("Saved successfully to home.ts!");
      } else {
        const err = await response.json();
        alert("Failed to save: " + (err.error || "Unknown error"));
      }
    } catch (e: any) {
      alert("Error saving: " + e.message);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="p-4 border-b border-border flex justify-between items-center z-50 bg-background/80 backdrop-blur-md">
        <div className="flex gap-4 items-center">
          <h1 className="text-xl font-bold">Image Position Debugger</h1>
          <select
            value={activeArray}
            onChange={(e) => {
              setActiveArray(e.target.value as "loading" | "hero");
              setCurrentIndex(0);
            }}
            className="p-2 bg-muted rounded-md text-sm border-none outline-none"
          >
            <option value="loading">Loading Photos</option>
            <option value="hero">Hero Images</option>
          </select>
          <span className="text-sm font-mono">
            {currentIndex + 1} / {currentArray.length}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={copyPositionsFromOtherArray}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-semibold hover:bg-secondary/80 transition-colors"
          >
            Copy positions from {activeArray === "loading" ? "Hero" : "Loading"}
          </button>
          <button
            onClick={saveToFile}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Save to home.ts
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Controls */}
        <div className="w-64 border-r border-border p-4 flex flex-col gap-6 overflow-y-auto z-10 bg-background/95">
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3 py-1 bg-muted rounded disabled:opacity-50 text-sm hover:bg-muted-foreground/30 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === currentArray.length - 1}
              className="px-3 py-1 bg-muted rounded disabled:opacity-50 text-sm hover:bg-muted-foreground/30 transition-colors"
            >
              Next
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Object Position
            </h3>

            {(["top", "center", "bottom", "left", "right"] as const).map(
              (pos) => (
                <button
                  key={pos}
                  onClick={() => updatePosition(pos)}
                  className={`px-3 py-2 text-left text-sm rounded transition-colors ${currentObjectPosition === pos ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"}`}
                >
                  {pos.charAt(0).toUpperCase() + pos.slice(1)}
                </button>
              ),
            )}
            <button
              onClick={() => updatePosition(undefined)}
              className={`px-3 py-2 text-left text-sm rounded transition-colors ${!currentObjectPosition && !currentObjectTop ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"}`}
            >
              Default (no override)
            </button>

            <div className="mt-4 flex flex-col gap-4 p-4 border rounded-md border-border bg-black/20">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Custom Adjust
              </h4>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span>Horizontal (X)</span>
                  <span>{currentX}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentX}
                  onChange={(e) =>
                    handleCustomPositionChange("x", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span>Vertical (Y)</span>
                  <span>{currentY}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentY}
                  onChange={(e) =>
                    handleCustomPositionChange("y", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Device Viewport
            </h3>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value as any)}
              className="p-2 bg-muted rounded-md text-sm border-none outline-none"
            >
              <option value="mobile">Mobile (375x812)</option>
              <option value="tablet">Tablet (768x1024)</option>
              <option value="desktop">Desktop (1440x900)</option>
              <option value="full">Fill Container</option>
            </select>
          </div>

          <div className="mt-auto">
            <p className="text-xs text-muted-foreground break-all">
              {currentUrl}
            </p>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1 relative bg-black/5 flex items-center justify-center overflow-auto p-4 md:p-8 pattern-grid-lg border-t border-white/5">
          {/* We want to simulate how it looks. Usually these are full cover or restricted to some bounds like portrait. */}
          <div
            className={`relative mx-auto border border-border shadow-2xl overflow-hidden rounded-lg bg-black transition-all duration-300 shrink-0 ${
              device === "mobile"
                ? "w-[375px] h-[812px]"
                : device === "tablet"
                  ? "w-[768px] h-[1024px]"
                  : device === "desktop"
                    ? "w-[1440px] h-[900px]"
                    : "w-full h-full"
            }`}
          >
            <SmartImage
              src={currentUrl}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover"
              objectPosition={currentObjectPosition}
              objectTop={currentObjectTop}
            />
            {/* Guide lines to show center */}
            <div className="absolute inset-0 border-x border-y border-white/20 pointer-events-none z-10 grid grid-cols-3 grid-rows-3 mix-blend-overlay">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="border border-white/10" />
              ))}
              <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/50 mix-blend-screen" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-red-500/50 mix-blend-screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
