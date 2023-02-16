"use client";

import { useQuery } from "@/app/_generated";
import ChatBox from "@/app/ChatBox";
import { Id } from "../../../../convex/_generated/dataModel";

export default function UseQueryChatBox(props: { channel: string }) {
  const channelId = new Id("channels", props.channel);
  const messages = useQuery("listMessages", channelId);

  return <ChatBox channel={props.channel} messages={messages}></ChatBox>;
}
