"use client";

import { PreloadedQuery } from "@convex-dev/next-experimental";
import { API } from "convex/_generated/api";
import { usePreloadedQuery } from "../_generated";
import ChannelPickerUI from "../ChannelPickerUI";

export default function ChannelPicker(props: {
  listChannels: PreloadedQuery<API, "listChannels">;
  listChannelsDefaultChannel: PreloadedQuery<
    API,
    "listChannels:defaultChannel"
  >;
}) {
  const channels = usePreloadedQuery(props.listChannels);
  const defaultChannelId = usePreloadedQuery(props.listChannelsDefaultChannel);
  return (
    <ChannelPickerUI channels={channels} defaultChannel={defaultChannelId} />
  );
}
