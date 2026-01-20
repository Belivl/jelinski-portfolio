import type { MutationCtx } from "./_generated/server";

export async function checkRateLimit(
  ctx: MutationCtx,
  { visitorId, key, minIntervalMs }: { visitorId: string; key: string; minIntervalMs: number }
) {
  const now = Date.now();
  const limit = await ctx.db
    .query("rateLimits")
    .withIndex("by_visitorId_key", (q) =>
      q.eq("visitorId", visitorId).eq("key", key)
    )
    .unique();

  if (limit) {
    const elapsed = now - limit.lastInteraction;
    if (elapsed < minIntervalMs) {
      throw new Error(`Rate limit exceeded. Please wait ${Math.ceil((minIntervalMs - elapsed) / 1000)}s.`);
    }
    await ctx.db.patch(limit._id, { lastInteraction: now });
  } else {
    await ctx.db.insert("rateLimits", {
      visitorId,
      key,
      lastInteraction: now,
    });
  }
}
