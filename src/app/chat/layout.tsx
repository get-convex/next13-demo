import { UserBadge } from "../UserBadge";

import ChannelPicker from "./ChannelPicker";
import JsHighlighter from "../../components/JsHighlighter";
import ChatUI from "../ChatUI";

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
      <ChatUI userBadge={<UserBadge />}>
        <ChannelPicker />
        {props.children}
      </ChatUI>
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
