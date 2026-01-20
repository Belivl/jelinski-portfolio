import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const wipeTable = mutation({
  args: { table: v.string() },
  handler: async (ctx, args) => {
    const documents = await ctx.db.query(args.table as any).collect();
    for (const doc of documents) {
      await ctx.db.delete(doc._id);
    }
    return documents.length;
  },
});

export const deleteCommentsByContent = mutation({
  args: { match: v.string() },
  handler: async (ctx, args) => {
    const allComments = await ctx.db.query("comments").collect();
    const matches = allComments.filter((c) =>
      c.content.toLowerCase().includes(args.match.toLowerCase())
    );
    for (const comment of matches) {
      await ctx.db.delete(comment._id);
    }
    return matches.length;
  },
});

export const deleteCommentsByAuthor = mutation({
  args: { authorAlias: v.string() },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("authorAlias"), args.authorAlias))
      .collect();
    for (const comment of comments) {
      await ctx.db.delete(comment._id);
    }
    return comments.length;
  },
});

export const wipeVisitorData = mutation({
  args: { visitorId: v.string() },
  handler: async (ctx, args) => {
    const tables = ["comments", "likes", "views"] as const;
    let count = 0;
    for (const table of tables) {
      const documents = await ctx.db
        .query(table)
        .filter((q) => q.eq(q.field("visitorId"), args.visitorId))
        .collect();
      for (const doc of documents) {
        await ctx.db.delete(doc._id);
        count++;
      }
    }
    return count;
  },
});
