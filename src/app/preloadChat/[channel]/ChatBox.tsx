"use client";

import { usePreloadedQuery } from "@/app/_generated";
import { PreloadedQuery } from "@convex-dev/next-experimental";
import { API } from "convex/_generated/api";
import ChatBoxUI from "@/app/ChatBoxUI";

export default function ChatBox(props: {
  channel: string;
  listMessages: PreloadedQuery<API, "listMessages">;
}) {
  const messages = usePreloadedQuery(props.listMessages);
  return <ChatBoxUI channel={props.channel} messages={messages}></ChatBoxUI>;
}
