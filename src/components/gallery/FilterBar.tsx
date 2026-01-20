import { CategoryCard } from "@/components/gallery/CategoryCard";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categoryImages?: Record<string, string>;
}

export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  categoryImages = {},
}: FilterBarProps) {
  // Add "all" to categories if not present, though it's usually handled by the caller
  const allCategories = categories.includes("all")
    ? categories
    : ["all", ...categories];

  return (
    <div className="flex flex-col justify-between w-full gap-6 dark:bg-neutral-900 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl ">
      <h2 className="text-xl font-bold text-foreground font-script1 capitalize">
        Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
        {allCategories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            isActive={activeCategory === category}
            onClick={() => onCategoryChange(category)}
            coverImage={categoryImages[category]}
          />
        ))}
      </div>
    </div>
  );
}
