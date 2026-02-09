import { useMemo } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Map as MapIcon, LayoutGrid } from "lucide-react";
import { CategoryCard } from "@/components/gallery/CategoryCard";
import { CATEGORY_COVERS } from "@/data/categoryCovers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card2 } from "@/components/ui/Card2";
import { useLanguage } from "@/lib/LanguageContext";
import type { BlogPost } from "@/data/photos";

interface BlogFilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  sortOrder: "desc" | "asc";
  setSortOrder: (order: "desc" | "asc") => void;
  viewMode: "grid" | "map";
  setViewMode: (mode: "grid" | "map") => void;
  posts: BlogPost[];
}

export function BlogFilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  sortOrder,
  setSortOrder,
  viewMode,
  setViewMode,
  posts,
}: BlogFilterBarProps) {
  const { t } = useLanguage();

  const CATEGORY_ORDER = [
    "client",
    "event",
    "session",
    "travel",
    "street",
    "mobile",
  ];

  const categories = ["all", ...CATEGORY_ORDER];

  const years = useMemo(() => {
    const yrs = new Set(
      posts.map((post) => {
        // Assuming date format is YY-MM-DD or YYYY-MM-DD
        const dateParts = post.date.split("-");
        const year =
          dateParts[0].length === 2 ? `20${dateParts[0]}` : dateParts[0];
        return year;
      }),
    );
    return ["all", ...Array.from(yrs).sort((a, b) => b.localeCompare(a))];
  }, [posts]);

  return (
    <Card2>
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center w-full">
        {/* Category Filter - Inline Pills */}
        <div className="flex flex-col gap-3 w-full ">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              {t.blog.filterByCategory}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full ">
            {categories.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                isActive={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                coverImage={CATEGORY_COVERS[category]}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10 w-full" />

      <div className="flex flex-row sm:flex-row w-full gap-3 justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-3 md:items-center w-full md:justify-end">
          {/* View Mode Toggle */}
          <div className="flex bg-neutral-900/50 p-1 rounded-lg border border-white/5 mr-auto">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`h-9 hover:bg-neutral-800 px-3 gap-2 ${viewMode === "grid" ? "bg-amber-500 hover:bg-amber-600 text-black" : "text-neutral-400 hover:text-white"}`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">{t.blog.showGrid}</span>
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("map")}
              className={`h-9 hover:bg-neutral-800 px-3 gap-2 ${viewMode === "map" ? "bg-amber-500 hover:bg-amber-600 text-black" : "text-neutral-400 hover:text-white"}`}
            >
              <MapIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{t.blog.showMap}</span>
            </Button>
          </div>

          {/* Reset Filters */}
          {(selectedCategory !== "all" || selectedYear !== "all") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-fit"
            >
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedYear("all");
                }}
                className="text-red-500 hover:text-red-400 hover:bg-red-500/10 px-4 h-11 transition-all w-full"
              >
                {t.blog.clearAllFilters}
              </Button>
            </motion.div>
          )}
          {/* Year Filter */}
          <div className="flex flex-col gap-0 min-w-[140px]">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full bg-background   hover:border-amber-500/50 border-white/10 hover:bg-amber-500/10 transition-colors h-11 ">
                <SelectValue placeholder={t.blog.allYears} />
              </SelectTrigger>
              <SelectContent className="dark:bg-neutral-900 dark:border-white/10 dark:text-neutral-200">
                <SelectGroup>
                  {years.map((year) => (
                    <SelectItem
                      key={year}
                      value={year}
                      className="focus:bg-amber-500/20 focus:text-amber-500"
                    >
                      {year === "all" ? t.blog.allYears : year}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Order Toggle */}
          <div className="flex flex-col gap-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setSortOrder(sortOrder === "desc" ? "asc" : "desc")
              }
              className=" bg-background border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-neutral-200 gap-2 min-w-[140px] md:w-fit w-full"
            >
              {sortOrder === "desc" ? t.blog.newestFirst : t.blog.oldestFirst}
              {sortOrder === "desc" ? (
                <ArrowDown className="w-4 h-4" />
              ) : (
                <ArrowUp className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card2>
  );
}
