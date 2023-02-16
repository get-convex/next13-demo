"use client";

import { PreloadedQuery } from "@convex-dev/next-experimental";
import { API } from "convex/_generated/api";
import { usePreloadedQuery } from "../_generated";
import ChannelPicker from "../ChannelPicker";

export default function PreloadChannelPicker(props: {
  listChannels: PreloadedQuery<API, "listChannels">;
}) {
  const channels = usePreloadedQuery(props.listChannels);

  return <ChannelPicker channels={channels}></ChannelPicker>;
}
