import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { checkRateLimit } from "./helpers";

export const getApproved = query({
  args: { photoId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comments")
      .withIndex("by_photoId", (q) => q.eq("photoId", args.photoId))
      .filter((q) => q.eq(q.field("isApproved"), true))
      .collect();
  },
});

export const add = mutation({
  args: {
    photoId: v.string(),
    content: v.string(),
    authorAlias: v.string(),
    visitorId: v.string(),
  },
  handler: async (ctx, args) => {
    await checkRateLimit(ctx, {
      visitorId: args.visitorId,
      key: "comments",
      minIntervalMs: 30000, // 30 seconds
    });

    return await ctx.db.insert("comments", {
      ...args,
      isApproved: false, // Moderated by default
    });
  },
});

export const countApproved = query({
  args: { photoId: v.string() },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_photoId", (q) => q.eq("photoId", args.photoId))
      .filter((q) => q.eq(q.field("isApproved"), true))
      .collect();
    return comments.length;
  },
});
