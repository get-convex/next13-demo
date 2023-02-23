import { preloadQuery } from "../_generated";

import ChannelPicker from "./ChannelPicker";

export default async function ChannelPickerWrapper(props: {
  children: React.ReactNode;
}) {
  const [[, listChannels], [, listChannelsDefaultChannel]] = await Promise.all([
    preloadQuery("listChannels"),
    preloadQuery("listChannels:defaultChannel"),
  ]);

  return (
    <ChannelPicker
      listChannels={listChannels}
      listChannelsDefaultChannel={listChannelsDefaultChannel}
    />
  );
}
