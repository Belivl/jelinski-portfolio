import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Masonry from "react-masonry-css";
import { getPhotos } from "@/data/photos.ts";
import { AdvancedFilterBar } from "@/components/gallery/AdvancedFilterBar";
import { PhotoLightbox } from "@/components/gallery/PhotoLightboxNew";
import { SmartImage } from "@/components/ui/SmartImage";
import { useLanguage } from "@/lib/LanguageContext";

export function GalleryGrid() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "all",
    camera: null as string | null,
    tags: [] as string[],
  });
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const photos = useMemo(() => getPhotos(), []);

  // Custom category order for display
  const CATEGORY_ORDER = [
    "client",
    "event",
    "portrait",
    "session",
    "travel",
    "street",
    "black-and-white",
    "architecture",
    "landscape",
    "animal",
    "cars",
    "various",
    "3d",
    "ui/ux",
    "branding",
    "design",
    "projects",
    "art",
    "painting",
    "drawing",
  ];

  // Extract available options and sort by custom order
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(photos.map((p) => p.category)));

    // Sort categories according to custom order
    const sorted = uniqueCategories.sort((a, b) => {
      const indexA = CATEGORY_ORDER.indexOf(a);
      const indexB = CATEGORY_ORDER.indexOf(b);

      // If both are in the order, sort by their position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      // If only A is in the order, A comes first
      if (indexA !== -1) return -1;
      // If only B is in the order, B comes first
      if (indexB !== -1) return 1;
      // If neither is in the order, maintain alphabetical order
      return a.localeCompare(b);
    });

    return sorted;
  }, [photos]);
  const cameras = useMemo(
    () => Array.from(new Set(photos.map((p) => p.camera))).sort(),
    [photos],
  );
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    photos.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [photos]);

  // Filter and sort logic
  const filteredPhotos = useMemo(() => {
    const isDefaultView =
      filters.category === "all" &&
      !filters.camera &&
      filters.tags.length === 0;

    return photos
      .filter((photo) => {
        // Category filter
        if (filters.category !== "all" && photo.category !== filters.category)
          return false;

        // Camera filter
        if (filters.camera && photo.camera !== filters.camera) return false;

        // Tags filter (match ALL selected tags)
        if (filters.tags.length > 0) {
          const hasAllTags = filters.tags.every((tag) =>
            photo.tags.includes(tag),
          );
          if (!hasAllTags) return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Parse dates for comparison (handling both YY-MM-DD and YYYY-MM-DD)
        const parseDate = (dateStr: string | undefined) => {
          if (!dateStr) return new Date(0); // Default to epoch if no date
          const parts = dateStr.split("-");
          const year = parts[0].length === 2 ? `20${parts[0]}` : parts[0];
          return new Date(`${year}-${parts[1]}-${parts[2]}`);
        };

        // When on the default view (no filters) and using default sort (\"latest\" mode),
        // prioritize client work: Daldehog, then Fizjotusia, then other client shots.
        if (isDefaultView && sortOrder === "desc") {
          const priority = (photo: (typeof photos)[number]) => {
            const title = (photo.title || "").toLowerCase();
            const blogId = photo.blogPostId || "";

            // 0 - Daldehog first
            if (title.includes("daldehog") || blogId === "daldehog") {
              return 0;
            }

            // 1 - Fizjotusia next
            if (
              title.includes("fizjotusia") ||
              title.includes("fizjo.tusia") ||
              blogId === "fizjotusia25"
            ) {
              return 1;
            }

            // 2 - Other client work
            if (photo.category === "client") {
              return 2;
            }

            // 3 - Everything else
            return 3;
          };

          const priorityA = priority(a);
          const priorityB = priority(b);

          if (priorityA !== priorityB) {
            return priorityA - priorityB;
          }
        }

        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);

        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      });
  }, [filters, photos, sortOrder]);

  // Handle deep linking
  useEffect(() => {
    const photoId = searchParams.get("photoId");
    if (photoId) {
      const index = filteredPhotos.findIndex((p) => p.id === photoId);
      if (index !== -1) {
        setSelectedPhotoIndex(index);
      }
    }
  }, [searchParams, filteredPhotos]);

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
    setSearchParams((params) => {
      params.delete("photoId");
      return params;
    });
  };

  return (
    <div className="pb-12">
      <AdvancedFilterBar
        categories={categories}
        availableCameras={cameras}
        availableTags={allTags}
        filters={filters}
        onFilterChange={setFilters}
        photos={photos}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <Masonry
        breakpointCols={{
          default: 3,
          1100: 2,
          700: 2,
        }}
        className="flex w-auto md:-ml-8 -ml-2 z-0 overflow-hidden"
        columnClassName="pl-2 md:pl-8 bg-clip-padding"
      >
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 1), // Staggered entry
              }}
              key={photo.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-muted md:mb-8 mb-2 dark:border-neutral-800 border min-h-[200px]"
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <SmartImage
                src={photo.url}
                alt={photo.title || "Photo"}
                width={800}
                priority={index < 9}
                objectTop={photo.objectTop}
                showAltOnHover={false}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 shadow-lg shadow-black/10 border border-black/10 overflow-hidden"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-sm font-medium mb-1 uppercase tracking-wider">
                    {t.gallery.tagCategories[
                      photo.category.toLowerCase() as keyof typeof t.gallery.tagCategories
                    ] || photo.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-muted-foreground w-full">
            <p className="text-xl">No photos found matching your filters.</p>
            <button
              onClick={() =>
                setFilters({ category: "all", camera: null, tags: [] })
              }
              className="mt-4 text-amber-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Masonry>

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => setSelectedPhotoIndex(null)}
      >
        {selectedPhotoIndex !== null && (
          <PhotoLightbox
            key="lightbox-modal"
            photos={filteredPhotos}
            currentIndex={selectedPhotoIndex}
            onClose={handleCloseLightbox}
            onIndexChange={(index) => {
              setSelectedPhotoIndex(index);
              // Optional: update URL as user navigates?
              // Ideally yes, but maybe too much noise. Let's keep it simple for now or adding it.
              // If we want persistent URL on navigation:
              // setSearchParams({ photoId: filteredPhotos[index].id });
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
