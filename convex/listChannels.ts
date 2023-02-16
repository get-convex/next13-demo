import { query } from "./_generated/server";

export const countChannels = query(async ({db}) => {
  return (await db.query("channels").collect()).length;
});

export default query(async ({ db }) => {
  return await db.query("channels").collect();
});
