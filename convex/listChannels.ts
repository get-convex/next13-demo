import { query } from "./_generated/server";

export default query(async ({ db }) => {
  return await db.query("channels").collect();
});

export const defaultChannel = query(async ({ db }) => {
  return (await db.query("channels").first())._id;
});
