import { UserBadge } from "../UserBadge";

import ChannelPicker from "./ChannelPicker";
import JsHighlighter from "../../components/JsHighlighter";

const clientComponentSnippet = `
"use client"
function ChannelPicker() {
  const channels = useQuery("listChannels");
  ...
}
`.trim();

export default async function ChatPage(props: { children: React.ReactNode }) {
  return (
    <article className="prose prose:xl dark:prose-invert pt-3 max-w-full">
      <p>
        The channel selector and chat view below use Client Components that
        leverage Convex's <code>useQuery</code> hook to fetch data during SSR.
        When the components hydrate they use data injected into the initial
        stream.
      </p>
      <div className="not-prose flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg my-2">
        <div className="pt-4 px-4 flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold">Convex Chat</h2>
          <UserBadge />
        </div>
        <div className="flex flex-grow items-stretch">
          <ChannelPicker />
          {props.children}
        </div>
      </div>
      <p>The developer uses the same syntax for querying data via Convex:</p>
      <JsHighlighter>{clientComponentSnippet}</JsHighlighter>
      <p>
        This version of our standard <code>useQuery</code> hook uses a{" "}
        <a href="https://github.com/vercel/next.js/commit/32242e5e91173de4691a155f3835e80ac15443e5">
          modified Next.js
        </a>{" "}
        that exposes <code>nextInjectIntoStream()</code>, inspired by the{" "}
        <a href="https://github.com/brillout/rfcs/blob/main/text/0000-inject-to-stream.md">
          injectToStream RFC
        </a>
        . We anticipate the ability to inject to the React stream or similar to
        be available soon.
      </p>
      <p>
        This demo also integrates Suspense, to prevent flickering during
        client-side navigation. When you select a different channel above, the
        Client Component suspends, fetches data directly from Convex, and then
        renders the new state.
      </p>
    </article>
  );
}
