import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getPhotos, type Photo } from "@/data/photos.ts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PhotoLightbox } from "@/components/gallery/PhotoLightboxNew";
import { useLanguage } from "@/lib/LanguageContext";
import { SmartImage } from "@/components/ui/SmartImage";
import { SEO } from "@/components/SEO";
import { NotFound } from "@/pages/404";
import { getBlogPost, getBlogPosts } from "@/lib/contentful";
import type { BlogPost as BlogPostType } from "@/data/photos";

export function BlogPost() {
  const { t } = useLanguage();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setIsLoading(true);
      try {
        const [targetPost, posts] = await Promise.all([
          getBlogPost(id),
          getBlogPosts(),
        ]);
        setPost(targetPost);
        setAllPosts(posts);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Handle deep linking - MOVED UP and made safe
  // We need to calculate postPhotos before this hook, or memoize it
  const allPhotos = getPhotos();

  const postPhotos = useMemo(() => {
    if (!post) return [];

    const translated = (t.data.blog as any)[post.id] || {};
    const title = translated.title || post.title;

    // Map post images to Photo objects
    const explicitPhotos: Photo[] = post.images.map(
      (imgUrl: string, index: number) => {
        // Try to find existing photo object
        const existingPhoto = allPhotos.find((p: Photo) => p.url === imgUrl);
        if (existingPhoto) return existingPhoto;

        // Fallback for images not in the main photos array
        return {
          id: `post-${post.id}-img-${index}`,
          url: imgUrl,
          title: title,
          category: "event", // Default category
          camera: "Unknown",
          tags: [],
          date: post.date,
        };
      },
    );

    // Merge and deduplicate
    const uniqueUrls = new Set<string>();
    const result: Photo[] = [];

    [...explicitPhotos].forEach((photo: Photo) => {
      if (!uniqueUrls.has(photo.url)) {
        uniqueUrls.add(photo.url);
        result.push(photo);
      }
    });

    return result;
  }, [post, allPhotos, t.data.blog]);

  useEffect(() => {
    const photoId = searchParams.get("photoId");
    if (photoId && postPhotos.length > 0) {
      const index = postPhotos.findIndex((p) => p.id === photoId);
      if (index !== -1) {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
      }
    }
  }, [searchParams, postPhotos]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500" />
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const translated = (t.data.blog as any)[post.id] || {};
  const title = translated.title || post.title;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <SEO title={title} image={post.coverImage} type="article" />
      <article className="container mx-auto px-6 max-w-4xl cursor-default">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4 w-fill">
            <Link to="/blog">
              <Button
                variant="ghost"
                className=" text-gray-400 hover:text-amber-500 hover:bg-transparent hover:underline underline-offset-4 w-fill md:w-fit"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> {t.blog.back}
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 my-16">
            <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
              {t.gallery.tagCategories[
                post.category as keyof typeof t.gallery.tagCategories
              ] ||
                post.category ||
                "Photography"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold  leading-tight text-foreground text-center font-script1">
              {title}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        <div className="aspect-video w-full rounded-xl overflow-hidden mb-12 bg-gray-900 border-3 border-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <SmartImage
            src={post.coverImage}
            alt={title}
            width={1600}
            priority={true}
            className={`w-full h-full object-cover object-${post.coverImageCrop}`}
          />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {t.blog.gallery}
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {postPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-lg cursor-pointer bg-gray-900 group break-inside-avoid mb-4"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsLightboxOpen(true);
                }}
              >
                <SmartImage
                  src={photo.url}
                  alt={photo.title || ""}
                  width={1200}
                  priority={index < 3}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 border dark:border-neutral-800"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8  flex flex-col gap-8">
          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            {(() => {
              const currentIndex = allPosts.findIndex((p) => p.id === post.id);
              const prevPost =
                currentIndex > 0 ? allPosts[currentIndex - 1] : null;
              const nextPost =
                currentIndex < allPosts.length - 1
                  ? allPosts[currentIndex + 1]
                  : null;

              return (
                <div className="grid grid-cols-1 md:grid-cols-3  gap-6 items-center w-full">
                  <div className="w-full ">
                    {prevPost ? (
                      <Link
                        to={`/blog/${prevPost.id}`}
                        className="group flex flex-col gap-1 border dark:border-neutral-800 rounded-lg px-6 py-4 w-full dark:bg-neutral-900 dark:hover:bg-neutral-800"
                      >
                        <span className="text-sm text-muted-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4" /> {t.blog.prev}
                        </span>
                        <span className="text-foreground font-medium truncate max-w-[200px]">
                          {((t.data.blog as any)[prevPost.id] || {}).title ||
                            prevPost.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="invisible">{t.blog.prev}</div>
                    )}
                  </div>

                  <Link to="/blog" className="w-full h-full">
                    <Button
                      variant="outline"
                      className="px-6 dark:border-white/20 dark:hover:bg-white/10 w-full h-full"
                    >
                      {t.blog.back}
                    </Button>
                  </Link>

                  <div className="w-full ">
                    {nextPost ? (
                      <Link
                        to={`/blog/${nextPost.id}`}
                        className="group flex flex-col gap-1 items-end border dark:border-neutral-800 rounded-lg px-6 py-4 w-full dark:bg-neutral-900 dark:hover:bg-neutral-800"
                      >
                        <span className="text-sm text-muted-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2">
                          {t.blog.next}{" "}
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </span>
                        <span className="text-foreground font-medium truncate max-w-[200px]">
                          {((t.data.blog as any)[nextPost.id] || {}).title ||
                            nextPost.title}
                        </span>
                      </Link>
                    ) : (
                      <div className="invisible">{t.blog.next}</div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </article>

      <AnimatePresence mode="wait">
        {isLightboxOpen && (
          <PhotoLightbox
            key="blog-post-lightbox"
            photos={postPhotos}
            currentIndex={currentImageIndex}
            onClose={() => {
              setIsLightboxOpen(false);
              setSearchParams((params) => {
                params.delete("photoId");
                return params;
              });
            }}
            onIndexChange={setCurrentImageIndex}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
