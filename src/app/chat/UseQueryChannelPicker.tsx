"use client";

import { useQuery } from "../_generated";
import ChannelPicker from "../ChannelPicker";

export default function PreloadChannelPicker() {
  const channels = useQuery("listChannels");

  return <ChannelPicker channels={channels}></ChannelPicker>;
}
