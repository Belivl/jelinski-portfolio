import { CategoryCard } from "./CategoryCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Check,
  X,
  Tag as TagIcon,
  ChevronRight,
  ChevronDown,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import type { Photo } from "@/data/photos.ts";
import { TAG_CATEGORIES } from "@/data/tags";
import { CATEGORY_COVERS } from "@/data/categoryCovers";
import { useLanguage } from "@/lib/LanguageContext";
import { Card2 } from "../ui/Card2";

interface FilterState {
  category: string;
  camera: string | null;
  tags: string[];
}

interface AdvancedFilterBarProps {
  categories: string[];
  availableCameras: string[];
  availableTags: string[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  photos: Photo[];
  sortOrder: "desc" | "asc";
  onSortChange: (order: "desc" | "asc") => void;
}

export function AdvancedFilterBar({
  categories,
  availableCameras,
  availableTags,
  filters,
  onFilterChange,
  photos,
  sortOrder,
  onSortChange,
}: AdvancedFilterBarProps) {
  const { t } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [isMasterTagsExpanded, setIsMasterTagsExpanded] = useState(false);
  // Auto-expand categories that have active filters
  useEffect(() => {
    const categoriesWithActiveFilters = new Set<string>();

    Object.entries(TAG_CATEGORIES).forEach(([category, tags]) => {
      if (tags.some((tag) => filters.tags.includes(tag))) {
        categoriesWithActiveFilters.add(category);
      }
    });

    const categorizedTags = Object.values(TAG_CATEGORIES).flat();
    if (filters.tags.some((tag) => !categorizedTags.includes(tag))) {
      categoriesWithActiveFilters.add("Other");
    }

    if (categoriesWithActiveFilters.size > 0) {
      setIsMasterTagsExpanded(true);
      setExpandedCategories((prev) => {
        const next = new Set(prev);
        categoriesWithActiveFilters.forEach((cat) => next.add(cat));
        return next;
      });
    }
  }, [filters.tags]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const toggleTag = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];
    onFilterChange({ ...filters, tags: newTags });
  };

  const clearFilters = () => {
    onFilterChange({ category: "all", camera: null, tags: [] });
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.camera !== null ||
    filters.tags.length > 0;

  // Helper to get a cover image for a category
  const getCategoryCover = (cat: string) => {
    if (CATEGORY_COVERS[cat]) return CATEGORY_COVERS[cat];
    const photo = photos.find((p) => p.category === cat);
    return photo ? photo.url : undefined;
  };

  // List of all categories including 'all'
  const displayCategories = ["all", ...categories];

  return (
    <div className="w-full  mx-auto mb-12 space-y-8">
      <Card2>
        {/* 1. Cinematic Category Cards */}
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
          {t.blog.filterByCategory}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {displayCategories.map((category) => {
            const isActive = filters.category === category;
            const coverImage = getCategoryCover(category);

            return (
              <CategoryCard
                key={category}
                category={category}
                isActive={isActive}
                onClick={() => onFilterChange({ ...filters, category })}
                coverImage={coverImage}
              />
            );
          })}
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-3 items-start justify-center pt-8 border-t dark:border-t-neutral-800">
          {/* 3. Tags Cloud (Categorized) */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="flex flex-wrap gap-3 items-center">
              <Button
                variant="outline"
                onClick={() => setIsMasterTagsExpanded(!isMasterTagsExpanded)}
                className="flex items-center gap-2 w-full md:w-fit group"
              >
                <TagIcon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isMasterTagsExpanded
                      ? "text-amber-500"
                      : "text-neutral-500 group-hover:text-neutral-300",
                  )}
                />
                <span className="text-sm  text-neutral-400   text-left group-hover:text-neutral-200 transition-colors">
                  {t.gallery.filterByTags}
                  {filters.tags.length > 0 && (
                    <span className="text-amber-500 ml-2 font-bold scale-110 inline-block">
                      ({filters.tags.length})
                    </span>
                  )}
                </span>
                <div
                  className={cn(
                    "text-neutral-500 transition-all duration-300",
                    isMasterTagsExpanded
                      ? "rotate-90 text-amber-500"
                      : "rotate-0",
                  )}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Button>
              {/* Clear All */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={clearFilters}
                  className="text-neutral-500 hover:text-red-400 gap-1 hover:bg-neutral-800"
                >
                  <X className="w-3 h-3" />
                  {t.gallery.clearAll}
                </Button>
              )}
            </div>
            <AnimatePresence initial={false}>
              {isMasterTagsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1 pl-2 border-l border-white/5 ml-2">
                    {Object.entries(TAG_CATEGORIES).map(([category, tags]) => {
                      // Filter tags to only show those that are available in current results
                      const availableInCategory = tags.filter((tag) =>
                        availableTags.includes(tag),
                      );

                      if (availableInCategory.length === 0) return null;

                      const isExpanded = expandedCategories.has(category);

                      return (
                        <div key={category} className="space-y-1">
                          <button
                            onClick={() => toggleCategory(category)}
                            className="flex items-center gap-2 w-full py-1 group"
                          >
                            <div className="text-neutral-600 transition-colors group-hover:text-amber-500">
                              {isExpanded ? (
                                <ChevronDown className="w-3 h-3" />
                              ) : (
                                <ChevronRight className="w-3 h-3" />
                              )}
                            </div>
                            <span className="text-[12px] font-mono text-neutral-400 uppercase tracking-widest transition-colors group-hover:text-neutral-200">
                              {t.gallery.tagGroupNames[
                                category as keyof typeof t.gallery.tagGroupNames
                              ] || category}
                              <span className="ml-2 text-neutral-600">
                                ({availableInCategory.length})
                              </span>
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.2,
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-wrap gap-1 pb-3 pl-5">
                                  {availableInCategory.map((tag) => {
                                    const isSelected =
                                      filters.tags.includes(tag);
                                    return (
                                      <Button
                                        key={tag}
                                        variant={
                                          isSelected ? "gold" : "outline"
                                        }
                                        size="sm"
                                        onClick={() => toggleTag(tag)}
                                        className={cn(
                                          "rounded-md text-[12px] h-7 px-2 border-neutral-800 bg-black/20 hover:bg-neutral-800 hover:text-white transition-all",
                                          isSelected &&
                                            "border-amber-500 hover:bg-amber-400 hover:border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.2)] text-neutral-200",
                                        )}
                                      >
                                        {isSelected && (
                                          <Check className="w-3 h-3 mr-1" />
                                        )}
                                        {t.gallery.tags[
                                          tag as keyof typeof t.gallery.tags
                                        ] || tag}
                                      </Button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}

                    {/* Other Tags (tags not in TAG_CATEGORIES) */}
                    {(() => {
                      const categorizedTags =
                        Object.values(TAG_CATEGORIES).flat();
                      const otherTags = availableTags.filter(
                        (tag) => !categorizedTags.includes(tag),
                      );

                      if (otherTags.length === 0) return null;

                      const isExpanded = expandedCategories.has("Other");

                      return (
                        <div className="space-y-1">
                          <button
                            onClick={() => toggleCategory("Other")}
                            className="flex items-center gap-2 w-full py-1 group"
                          >
                            <div className="text-neutral-600 transition-colors group-hover:text-amber-500">
                              {isExpanded ? (
                                <ChevronDown className="w-3 h-3" />
                              ) : (
                                <ChevronRight className="w-3 h-3" />
                              )}
                            </div>
                            <span className="text-[12px] font-mono text-neutral-400 uppercase tracking-widest transition-colors group-hover:text-neutral-200">
                              {t.gallery.otherTags}
                              <span className="ml-2 text-neutral-600">
                                ({otherTags.length})
                              </span>
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.2,
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-wrap gap-1 pb-3 pl-5">
                                  {otherTags.map((tag) => {
                                    const isSelected =
                                      filters.tags.includes(tag);
                                    return (
                                      <Button
                                        key={tag}
                                        variant={
                                          isSelected ? "gold" : "outline"
                                        }
                                        size="sm"
                                        onClick={() => toggleTag(tag)}
                                        className={cn(
                                          "rounded-md text-[12px] h-7 px-2 border-neutral-800 bg-black/20 hover:bg-neutral-800 hover:text-white transition-all",
                                          isSelected &&
                                            "border-amber-500 hover:bg-amber-400 hover:border-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.2)] text-neutral-200",
                                        )}
                                      >
                                        {isSelected && (
                                          <Check className="w-3 h-3 mr-1" />
                                        )}
                                        {t.gallery.tags[
                                          tag as keyof typeof t.gallery.tags
                                        ] || tag}
                                      </Button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Sort Controls */}
          <div className="flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onSortChange(sortOrder === "desc" ? "asc" : "desc")
              }
              className=" bg-black/40 border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-neutral-200 gap-2 min-w-[140px]"
            >
              {sortOrder === "desc" ? t.blog.newestFirst : t.blog.oldestFirst}
              {sortOrder === "desc" ? (
                <ArrowDown className="w-4 h-4" />
              ) : (
                <ArrowUp className="w-4 h-4" />
              )}
            </Button>
          </div>
          {/* 2. Filters & Actions (Camera & Clear) */}
          <div className="w-full md:w-fit flex flex-col gap-4 ">
            <Select
              value={filters.camera || "all"}
              onValueChange={(val) =>
                onFilterChange({
                  ...filters,
                  camera: val === "all" ? null : val,
                })
              }
            >
              <SelectTrigger className="w-full dark:bg-neutral-900  dark:border-neutral-800 dark:text-neutral-200">
                <SelectValue placeholder={t.gallery.selectCamera} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.gallery.allCameras}</SelectItem>
                {availableCameras.map((camera) => (
                  <SelectItem key={camera} value={camera}>
                    {camera}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card2>
    </div>
  );
}
