import ChatBox from "./ChatBox";

export default async function ChannelChat(props: {
  params: { channel: string };
}) {
  return <ChatBox channel={props.params.channel} />;
}
