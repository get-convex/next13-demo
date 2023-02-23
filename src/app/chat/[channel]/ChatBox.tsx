"use client";

import { useQuery } from "@/app/_generated";
import ChatBoxUI from "@/app/ChatBoxUI";
import { Id } from "../../../../convex/_generated/dataModel";

export default function ChatBox(props: { channel: string }) {
  const channelId = new Id("channels", props.channel);
  const messages = useQuery("listMessages", channelId);

  return <ChatBoxUI channel={props.channel} messages={messages}></ChatBoxUI>;
}
