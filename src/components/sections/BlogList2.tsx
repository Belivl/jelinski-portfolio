import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowUp,
  ArrowDown,
  MapPin,
  Plane,
  Camera,
  User,
  Music,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
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
import { useLanguage } from "@/lib/LanguageContext";
import { SmartImage } from "@/components/ui/SmartImage";

export function BlogList() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  // Fixed list of categories for the blog
  const categories = ["all", "travel", "street", "session", "event", "client"];

  // Extract unique years
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
      <div className="flex flex-col justify-between w-full gap-6 dark:bg-neutral-900 p-6 rounded-2xl backdrop-blur-md border-t border-t-neutral-600 border-l border-l-neutral-700 border-r border-r-neutral-800 border-b border-b-neutral-800 shadow-2xl">
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
          <div className="flex flex-row gap-3 items-center w-full justify-end">
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
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto perspective-1000">
        <AnimatePresence mode="popLayout">
          {filteredAndSortedPosts.map((post) => (
            <ArcCard key={post.id} post={post} />
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
type Props = {
  post: any;
};

const ArcCard = ({ post }: Props) => {
  const { t } = useLanguage();
  const boundingRef = useRef<DOMRect | null>(null);

  const translated = (t.data.blog as any)[post.id] || {};
  const title = translated.title || post.title;

  // Generate stamp style based on category
  const { stampColor, StampIcon } = useMemo(() => {
    const category = post.category?.toLowerCase();
    switch (category) {
      case "travel":
        return {
          stampColor: "bg-blue-700",
          StampIcon: Plane,
        };
      case "street":
        return {
          stampColor: "bg-zinc-800",
          StampIcon: Camera,
        };
      case "session":
        return {
          stampColor: "bg-yellow-700",
          StampIcon: User,
        };
      case "event":
        return {
          stampColor: "bg-rose-500",
          StampIcon: Music,
        };
      case "client":
        return {
          stampColor: "bg-emerald-700",
          StampIcon: Briefcase,
        };
      default:
        return {
          stampColor: "bg-amber-800",
          StampIcon: MapPin,
        };
    }
  }, [post.category]);

  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  const maxRotation = 30;
  const maxOffset = 30;

  const stampOffset = useMemo(() => {
    const offsetRND =
      Math.floor(Math.random() * (maxOffset - 0 + 1)) * plusOrMinus;
    const offset = [offsetRND, offsetRND];
    return offset;
  }, [title]);

  const stampRotation = useMemo(() => {
    const rotation =
      Math.floor(Math.random() * (maxRotation - 0 + 1)) * plusOrMinus;
    return rotation;
  }, [title]);
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="flex flex-col perspective-midrange group">
        <div
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.5) * 10;
            const yRotation = (0.5 - yPercentage) * 10;

            ev.currentTarget.style.setProperty(
              "--x-rotation",
              `${yRotation}deg`,
            );
            ev.currentTarget.style.setProperty(
              "--y-rotation",
              `${xRotation}deg`,
            );
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
          className="group relative w-full flex flex-col rounded-md bg-neutral-100 dark:shadow-xl shadow-2xl  dark:bg-white p-4 pb-0 text-neutral-700 transition-transform ease-out hover:transform-[rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)]"
        >
          {/* <figure className="rounded-md mix-blend-multiply bg-[radial-gradient(at_70%_40%,transparent_30%,currentColor_40%),url(/noise.svg)]" /> */}
          <div
            className="absolute w-10 h-10 translate-x-2 translate-y-4 -right-2 -top-6 bg-black/60 z-30 blur-sm "
            style={{
              transform: `rotate(${stampRotation}deg)`,
              translate: `-${stampOffset[0]}px ${stampOffset[1]}px`,
            }}
          />
          <div
            className={`${stampColor} z-30 wavy-border flex items-center justify-center -right-2 -top-6 absolute group-hover:rotate-5 transition-all duration-200`}
            style={{
              transform: `rotate(${stampRotation}deg)`,
              translate: `-${stampOffset[0]}px ${stampOffset[1]}px`,
            }}
          >
            <StampIcon className={`w-5 h-5 text-white`} />
          </div>
          <div className=" rounded-sm overflow-hidden">
            <div className="relative group-hover:scale-105 transition-all duration-700">
              <h2 className="text-3xl md:text-6xl z-10 text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.9)] group-hover:text-shadow-[0_8px_10px_#432100]  absolute w-full h-full flex items-center justify-center font-script1 group-hover:text-amber-700 dark:group-hover:text-amber-500  leading-tight group-hover:scale-105 transition-all duration-200">
                {title}
              </h2>

              <img
                src="/noise.svg"
                alt="noise"
                className="absolute inset-0 z-10 opacity-25 rounded-md "
              />
              <div className="absolute inset-0 bg-black/20 z-0 rounded-md " />
              <SmartImage
                src={`${post.coverImage}`}
                alt={title}
                width={800}
                className={`object-cover w-full aspect-video rounded-md object-${post.coverImageCrop}  border border-t-neutral-600 border-b-neutral-200 border-x-neutral-400`}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full h-fit pl-2 ">
            <div className="flex items-center gap-4 ">
              <div className="flex items-center gap-2 text-xs md:text-base truncate">
                <Calendar className="w-3 h-3" /> <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-base truncate">
                <MapPin className="w-3 h-3" />{" "}
                <span>{post.place || "Unknown Location"}</span>
              </div>
            </div>
            <Button
              variant="link"
              className="text-neutral-700 cursor-pointer dark:text-neutral-500 font-semibold text-xs hover:no-underline group-hover:scale-105 transition-transform gap-1 items-center flex group-hover:text-amber-700 dark:group-hover:text-amber-500"
            >
              {t.blog.viewPostcard || "View Postcard"}
              <ArrowRight className="w-4 h-4  group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_20%,transparent_90%)]" />
        </div>
      </div>
    </Link>
  );
};
