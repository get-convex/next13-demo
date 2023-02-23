"use client";

import { useQuery } from "../_generated";
import ChatBox from "./[channel]/ChatBox";

export default function NoChannelSelected() {
  const channelId = useQuery("listChannels:defaultChannel");
  return <ChatBox channel={channelId} />;
}
