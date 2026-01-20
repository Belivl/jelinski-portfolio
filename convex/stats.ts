import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { checkRateLimit } from "./helpers";

export const getStats = query({
  args: { photoId: v.string(), visitorId: v.string() },
  handler: async (ctx, args) => {
    const metadata = await ctx.db
      .query("photosMetadata")
      .withIndex("by_photoId", (q) => q.eq("photoId", args.photoId))
      .unique();

    const hasLiked = await ctx.db
      .query("likes")
      .withIndex("by_visitorId_photoId", (q) =>
        q.eq("visitorId", args.visitorId).eq("photoId", args.photoId)
      )
      .unique();

    return {
      likesCount: metadata?.likesCount ?? 0,
      viewsCount: metadata?.viewsCount ?? 0,
      hasLiked: !!hasLiked,
    };
  },
});

export const toggleLike = mutation({
  args: { photoId: v.string(), visitorId: v.string() },
  handler: async (ctx, args) => {
    await checkRateLimit(ctx, {
      visitorId: args.visitorId,
      key: "likes",
      minIntervalMs: 1000, // 1 second
    });

    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_visitorId_photoId", (q) =>
        q.eq("visitorId", args.visitorId).eq("photoId", args.photoId)
      )
      .unique();

    const metadata = await ctx.db
      .query("photosMetadata")
      .withIndex("by_photoId", (q) => q.eq("photoId", args.photoId))
      .unique();

    if (existingLike) {
      // Unlike
      await ctx.db.delete(existingLike._id);
      if (metadata) {
        await ctx.db.patch(metadata._id, {
          likesCount: Math.max(0, metadata.likesCount - 1),
        });
      }
    } else {
      // Like
      await ctx.db.insert("likes", {
        photoId: args.photoId,
        visitorId: args.visitorId,
      });
      if (metadata) {
        await ctx.db.patch(metadata._id, {
          likesCount: metadata.likesCount + 1,
        });
      } else {
        await ctx.db.insert("photosMetadata", {
          photoId: args.photoId,
          likesCount: 1,
          viewsCount: 0,
        });
      }
    }
  },
});

export const registerView = mutation({
  args: { photoId: v.string(), visitorId: v.string() },
  handler: async (ctx, args) => {
    const existingView = await ctx.db
      .query("views")
      .withIndex("by_visitorId_photoId", (q) =>
        q.eq("visitorId", args.visitorId).eq("photoId", args.photoId)
      )
      .unique();

    if (existingView) return;

    await ctx.db.insert("views", {
      photoId: args.photoId,
      visitorId: args.visitorId,
    });

    const metadata = await ctx.db
      .query("photosMetadata")
      .withIndex("by_photoId", (q) => q.eq("photoId", args.photoId))
      .unique();

    if (metadata) {
      await ctx.db.patch(metadata._id, {
        viewsCount: metadata.viewsCount + 1,
      });
    } else {
      await ctx.db.insert("photosMetadata", {
        photoId: args.photoId,
        likesCount: 0,
        viewsCount: 1,
      });
    }
  },
});
