"use client";

import { Document } from ".../../convex/_generated/dataModel";
import { Id } from "../../convex/_generated/dataModel";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { useMutation } from "../../convex/_generated/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Form from "./components/Form";

export default function ChannelPicker(props: { channels: Document[] }) {
  const pathname = usePathname();
  const layoutSegment = useSelectedLayoutSegment();

  let layoutPath = pathname;
  let selected: null | Id<"channels"> = null;
  if (pathname && layoutSegment) {
    layoutPath = pathname.slice(0, -layoutSegment.length);
    selected = new Id("channels", layoutSegment);
  }

  const [newChannelName, setNewChannelName] = useState("");
  const addChannel = useMutation("addChannel");

  const router = useRouter();

  async function handleAddChannel(event: any) {
    event.preventDefault();
    setNewChannelName("");
    const id = await addChannel(newChannelName);
    // router.push(`${layoutPath}/${id.toString()}`);
  }

  return (
    <div className="w-80 border-r border-gray-200 dark:border-gray-700 pr-3 pt-1 h-96">
      <h3 className="p-1 font-bold">Channels</h3>
      <Form
        buttonLabel="Add"
        placeholder="Add a channel..."
        value={newChannelName}
        onSubmit={handleAddChannel}
        onChange={setNewChannelName}
      />
      <ul className="flex flex-col gap-1 mt-1">
        {props.channels.map(channel => (
          <Link
            className="block p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-sm"
            href={`${layoutPath}/${channel._id.toString()}`}
            key={channel._id.toString()}
            style={{
              fontWeight: channel._id.equals(selected) ? "bold" : "normal",
            }}
          >
            {channel.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
