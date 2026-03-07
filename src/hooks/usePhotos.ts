
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { type Photo } from "@/data/photos";

/**
 * Hook to get all photos.
 * Warning: This fetches all ~5000 photos. Use with caution.
 * Useful for GalleryGrid until we implement server-side filtering/sorting fully 
 * matching the complex client-side logic.
 */
export function useAllPhotos() {
  const photos = useQuery(api.photos.getAllPhotos);
  if (!photos) return [];

  // Map _id to id for frontend compatibility
  return photos.map((p) => ({
    ...p,
    id: p._id,
    // Cast category to compatibility type to silence error
    category: p.category as Photo["category"], 
  })) as Photo[];
}

/**
 * Hook to get a single photo by ID
 */
export function usePhoto(id: string) {
  // If id is not a valid ID format, useQuery might warn, but we can't easily validate without helper.
  // We assume caller passes valid ID or we wrap it.
  return useQuery(api.photos.getPhoto, { id: id as Id<"photos"> });
}
