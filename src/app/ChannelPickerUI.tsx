"use client";

import { Document } from ".../../convex/_generated/dataModel";
import { Id } from "../../convex/_generated/dataModel";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { useMutation } from "../../convex/_generated/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Form from "../components/Form";
import classNames from "classnames";

export default function ChannelPickerUI(props: {
  channels: Document[];
  defaultChannel: Id<"channels">;
}) {
  const pathname = usePathname();
  const layoutSegment = useSelectedLayoutSegment();

  let layoutPath = pathname;
  let selected = props.defaultChannel;
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
    router.push(`${layoutPath}/${id.toString()}`);
  }

  return (
    <div className="w-80 border-r border-gray-200 dark:border-gray-700 pt-2 h-96">
      <h3 className="pl-4 mb-1 text-lg font-bold">Channels</h3>
      <Form
        className="px-4"
        buttonLabel="Add"
        placeholder="Add a channel..."
        value={newChannelName}
        onSubmit={handleAddChannel}
        onChange={setNewChannelName}
      />
      <ul className="flex flex-col gap-1 mt-1 px-2">
        {props.channels.map((channel) => (
          <Link
            className={classNames(
              "block py-1 px-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md",
              {
                "bg-zinc-200/50 dark:bg-zinc-800/50":
                  channel._id.equals(selected),
              }
            )}
            href={`${layoutPath}/${channel._id.toString()}`}
            key={channel._id.toString()}
          >
            {channel.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
