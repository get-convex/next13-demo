import ChatBox from "./UseQueryChatBox";

export default async function ChatPage(props: { params: { channel: string } }) {
  return <ChatBox channel={props.params.channel} />;
}
