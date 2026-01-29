import { useState, useMemo } from "react";
import { AnimatePresence } from "motion/react";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { PostCard } from "@/components/ui/PostCard";
import { BlogFilterBar } from "@/components/gallery/BlogFilterBar";

export function BlogList() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const dateParts = post.date.split("-");
        const year =
          dateParts[0].length === 2 ? `20${dateParts[0]}` : dateParts[0];

        const categoryMatch =
          selectedCategory === "all" || post.category === selectedCategory;
        const yearMatch = selectedYear === "all" || year === selectedYear;

        return categoryMatch && yearMatch;
      })
      .sort((a, b) => {
        // Parse dates for comparison (handling both YY-MM-DD and YYYY-MM-DD)
        const parseDate = (dateStr: string) => {
          const parts = dateStr.split("-");
          const year = parts[0].length === 2 ? `20${parts[0]}` : parts[0];
          return new Date(`${year}-${parts[1]}-${parts[2]}`);
        };

        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);

        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      });
  }, [selectedCategory, selectedYear, sortOrder]);

  return (
    <div className="space-y-8">
      {/* Filters and Sort Controls */}
      <BlogFilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-24 mt-16  mx-auto perspective-1000">
        <AnimatePresence mode="popLayout">
          {filteredAndSortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </div>

      {filteredAndSortedPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-neutral-400">{t.blog.noPostsFound}</p>
          <Button
            variant="link"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedYear("all");
            }}
            className="text-amber-500 mt-4"
          >
            {t.blog.clearAllFilters}
          </Button>
        </div>
      )}
    </div>
  );
}
