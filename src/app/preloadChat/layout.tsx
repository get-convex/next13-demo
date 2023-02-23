import JsHighlighter from "../../components/JsHighlighter";
import { UserBadge } from "../UserBadge";
import { preloadQuery } from "../_generated";

import ChannelPickerWrapper from "./ChannelPickerWrapper";

const preloadSnippetServer = `
export default async function ChannelPickerWrapper() {
  const [_channels, listChannels] = await preloadQuery("listChannels");
  return (
    <ClientComponent listChannels={listChannels} />
  );
}
`.trim();

const preloadSnippetClient = `
"use client";
export default function ChannelPicker({ listChannels }) {
  const channels = usePreloadedQuery(props.listChannels);
  ...
}
`.trim();

export default async function PreloadChat(props: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose:xl dark:prose-invert pt-3 max-w-full">
      <p>
        The channel selector and chat view below are Client Components initially
        rendered by Server Components using a new Convex{" "}
        <code>preloadQuery</code> async function to fetch data. The initial data
        is passed down via props and used during hydration.
      </p>
      <div className="not-prose flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg my-2">
        <div className="pt-4 px-4 flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold">Convex Chat</h2>
          <UserBadge />
        </div>
        <div className="flex flex-grow items-stretch">
          {/* @ts-expect-error async Server Component */}
          <ChannelPickerWrapper />
          {props.children}
        </div>
      </div>
      <p>
        The developer has to split their implementation into two components:
      </p>
      <JsHighlighter>{preloadSnippetServer}</JsHighlighter>
      <p />
      <JsHighlighter>{preloadSnippetClient}</JsHighlighter>

      <p>
        <code>preloadQuery</code> ensures all queries on the page are consistent
        and returns an opaque query handle which must be passed down to
        <code>usePreloadedQuery()</code>.
      </p>
      <p>Client side navigation leverages Server Components.</p>
      <p>
        This approach works in Next.js 12 and Next.js 13 without any
        modifications to Next.js.
      </p>
    </article>
  );
}
