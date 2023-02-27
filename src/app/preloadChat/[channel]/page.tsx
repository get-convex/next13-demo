import ChatBoxWrapper from "./ChatBoxWrapper";

export default async function ChannelChat(props: {
  params: { channel: string };
}) {
  // @ts-expect-error async Server Component
  return <ChatBoxWrapper channel={props.params.channel} />;
}
