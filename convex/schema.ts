import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  comments: defineTable({
    photoId: v.string(),
    content: v.string(),
    authorAlias: v.string(),
    visitorId: v.string(),
    isApproved: v.boolean(),
  }).index("by_photoId", ["photoId"]),

  likes: defineTable({
    photoId: v.string(),
    visitorId: v.string(),
  })
    .index("by_photoId", ["photoId"])
    .index("by_visitorId_photoId", ["visitorId", "photoId"]),

  views: defineTable({
    photoId: v.string(),
    visitorId: v.string(),
  })
    .index("by_photoId", ["photoId"])
    .index("by_visitorId_photoId", ["visitorId", "photoId"]),

  photosMetadata: defineTable({
    photoId: v.string(),
    likesCount: v.number(),
    viewsCount: v.number(),
  }).index("by_photoId", ["photoId"]),

  rateLimits: defineTable({
    visitorId: v.string(),
    key: v.string(), // e.g. "comments", "likes"
    lastInteraction: v.number(),
  }).index("by_visitorId_key", ["visitorId", "key"]),

  photos: defineTable({
    url: v.string(),
    title: v.optional(v.string()),
    category: v.string(),
    camera: v.string(),
    tags: v.array(v.string()),
    date: v.optional(v.string()),
    place: v.optional(v.string()),
    titleKey: v.optional(v.string()),
    placeKey: v.optional(v.string()),
    blogPostId: v.optional(v.string()),
    objectTop: v.optional(v.boolean()),
    externalId: v.optional(v.string()),
  })
    .index("by_category", ["category"])
    .index("by_date", ["date"]),
});
