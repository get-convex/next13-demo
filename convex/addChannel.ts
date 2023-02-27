import { mutation } from "./_generated/server";

export default mutation(async ({ db }, name) => {
  for await (const channel of db.query("channels")) {
    if (channel.name === name) {
      throw new Error(`Channel ${name} already exists`);
    }
  }
  return db.insert("channels", { name });
});
