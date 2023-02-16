"use client";

import { UserContext } from "@/app/UserContext";
import { Id, Document } from "../../convex/_generated/dataModel";
import { useMutation } from "../../convex/_generated/react";
import { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Form from "./components/Form";

export default function ChatBox(props: {
  channel: string;
  messages: Document[];
}) {
  const channelId = new Id("channels", props.channel);

  const user = useContext(UserContext);

  const listRef = useRef<HTMLUListElement>(null);

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage").withOptimisticUpdate(
    (localStore, channel, body, author) => {
      const existingMessages = localStore.getQuery("listMessages", [channelId]);
      if (existingMessages !== undefined) {
        const now = Date.now();
        const newMessage = {
          _id: new Id("messages", crypto.randomUUID()),
          _creationTime: now,
          channel,
          body,
          author,
        };
        localStore.setQuery(
          "listMessages",
          [channel],
          [...existingMessages, newMessage]
        );
      }
    }
  );

  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    listRef.current?.children[
      listRef.current?.children.length - 1
    ]?.scrollIntoView(false);
  };

  async function handleSendMessage(event: any) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage(channelId, newMessageText, user);
    scrollToBottom();
  }

  return (
    <div className="flex flex-col flex-grow h-96 p-2">
      <div className="overflow-y-scroll">
        <h3>Messages</h3>
        <ul ref={listRef}>
          {props.messages.map(message => {
            const isViewer = message.author === user;
            return (
              <li className="pb-1" key={message._id.toString()}>
                <div
                  className={classNames("flex items-baseline gap-2", {
                    "flex-row-reverse": isViewer,
                  })}
                >
                  <span className="font-bold">{message.author}</span>
                  <span className="text-xs">
                    {new Date(message._creationTime).toLocaleTimeString()}
                  </span>
                </div>
                <div className={classNames({ "text-right": isViewer })}>
                  {message.body}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Form
        buttonLabel="Send"
        placeholder="Write a message…"
        value={newMessageText}
        onChange={setNewMessageText}
        onSubmit={handleSendMessage}
      />
    </div>
  );
}
