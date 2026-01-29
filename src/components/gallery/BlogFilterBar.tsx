import { useMemo } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";
import { CategoryCard } from "@/components/gallery/CategoryCard";
import { blogPosts } from "@/data/blogData";
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

interface BlogFilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  sortOrder: "desc" | "asc";
  setSortOrder: (order: "desc" | "asc") => void;
}

export function BlogFilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  sortOrder,
  setSortOrder,
}: BlogFilterBarProps) {
  const { t } = useLanguage();

  const CATEGORY_ORDER = ["client", "event", "session", "travel", "street"];

  const categories = ["all", ...CATEGORY_ORDER];

  const years = useMemo(() => {
    const yrs = new Set(
      blogPosts.map((post) => {
        // Assuming date format is YY-MM-DD or YYYY-MM-DD
        const dateParts = post.date.split("-");
        const year =
          dateParts[0].length === 2 ? `20${dateParts[0]}` : dateParts[0];
        return year;
      }),
    );
    return ["all", ...Array.from(yrs).sort((a, b) => b.localeCompare(a))];
  }, []);

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
                className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 px-4 h-11 transition-all w-full"
              >
                {t.blog.clearAllFilters}
              </Button>
            </motion.div>
          )}
          {/* Year Filter */}
          <div className="flex flex-col gap-0 min-w-[140px]">
            <Select
              value={selectedYear}
              onValueChange={setSelectedYear}
              // modal={false} // Prevents body scroll lock and layout shift
            >
              <SelectTrigger className="w-full dark:bg-neutral-900 dark:border-neutral-800 hover:border-amber-500/50 transition-colors h-11 ">
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
              onClick={() =>
                setSortOrder(sortOrder === "desc" ? "asc" : "desc")
              }
              className="h-11 dark:bg-neutral-900 dark:border-neutral-800 hover:border-amber-500/50 hover:bg-amber-500/10 dark:text-neutral-200 gap-2 min-w-[140px]"
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
