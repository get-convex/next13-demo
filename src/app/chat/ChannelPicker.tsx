"use client";

import { useQuery } from "../_generated";
import ChannelPickerUI from "../ChannelPickerUI";

export default function ChannelPicker() {
  const channels = useQuery("listChannels");
  return (
    <ChannelPickerUI
      channels={channels}
      defaultChannel={channels[0]._id}
    ></ChannelPickerUI>
  );
}
