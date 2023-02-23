import { ConvexHttpClient } from "convex/browser";
import { preloadQuery } from "../_generated";
import ChatBoxWrapper from "./[channel]/ChatBoxWrapper";

export default async function NoChannelSelectedWrapper() {
  const [defaultChannelId] = await preloadQuery("listChannels:defaultChannel");
  // @ts-expect-error async Server Component
  return <ChatBoxWrapper channel={defaultChannelId.id} />;
}
