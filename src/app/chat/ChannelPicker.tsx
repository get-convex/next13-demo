"use client";

import { useQuery } from "../_generated";
import ChannelPickerUI from "../ChannelPickerUI";

export default function ChannelPicker() {
  const channels = useQuery("listChannels");
  const defaultChannelId = useQuery("listChannels:defaultChannel");
  return (
    <ChannelPickerUI
      channels={channels}
      defaultChannel={defaultChannelId}
    ></ChannelPickerUI>
  );
}
