import { Id } from "../../../../convex/_generated/dataModel";
import { preloadQuery } from "@/app/_generated";
import ChatBox from "./ChatBox";

export default async function ChatBoxWrapper(props: { channel: string }) {
  const id = new Id("channels", props.channel);
  const [, listMessages] = await preloadQuery("listMessages", id);
  return <ChatBox listMessages={listMessages} channel={props.channel} />;
}
