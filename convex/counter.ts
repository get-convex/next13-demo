import { mutation, query } from "./_generated/server";

export const get = query(async ({ db }) => {
  const doc = await db.query("counter").unique();
  const count = doc?.count ?? 0;
  return count as number;
});

export const increment = mutation(async ({ db }) => {
  const existing = await db.query("counter").unique();
  if (existing) {
    existing.count += 1;
    await db.replace(existing._id, existing);
  } else {
    await db.insert("counter", { count: 1 });
  }
});
