import { Id } from "../../../../convex/_generated/dataModel";
import { preloadQuery } from "@/app/_generated";
import ChatBox from "./PreloadChatBox";

export default async function ChatPage(props: { params: { channel: string } }) {
  const id = new Id("channels", props.params.channel);
  const [, listMessages] = await preloadQuery("listMessages", id);
  return <ChatBox listMessages={listMessages} channel={props.params.channel} />;
}
