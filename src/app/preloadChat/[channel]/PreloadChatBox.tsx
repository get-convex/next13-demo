"use client";

import { usePreloadedQuery } from "@/app/_generated";
import { PreloadedQuery } from "@convex-dev/next-experimental";
import { API } from "convex/_generated/api";
import ChatBox from "@/app/ChatBox";

export default function PreloadChatBox(props: {
  channel: string;
  listMessages: PreloadedQuery<API, "listMessages">;
}) {
  const messages = usePreloadedQuery(props.listMessages);
  return <ChatBox channel={props.channel} messages={messages}></ChatBox>;
}
