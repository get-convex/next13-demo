import JsHighlighter from "../components/JsHighlighter";
import { UserBadge } from "../UserBadge";
import { preloadQuery } from "../_generated";

import ChannelPicker from "./PreloadChannelPicker";

const preloadSnippetServer = `
export default async function ServerComponent(props: { children: React.ReactNode }) {
  const [channels, listChannels] = await preloadQuery("listChannels");
  return (
    <ClientComponent listChannels={listChannels} />
      {props.children}
    </ClientComponent>
  )
}
`.trim();

const preloadSnippetClient = `
"use client";
export default function ClientComponent({ listChannels }) {
  const channels = usePreloadedQuery(props.listChannels);
  ...
}
`.trim();

export default async function Layout(props: { children: React.ReactNode }) {
  const [, listChannels] = await preloadQuery("listChannels");
  return (
    <>
      <div className="flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4">
        <div className="flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold">Convex Chat</h2>
          <UserBadge />
        </div>
        <div className="flex flex-grow items-stretch">
          <ChannelPicker listChannels={listChannels} />
          {props.children}
        </div>
      </div>
      <article className="prose prose:xl dark:prose-invert pt-6 max-w-full">
        <p>
          This demo showcases our first API for server rendering. The developer
          calls <code>preloadQuery</code> (either in{" "}
          <code>getServerSideProps</code> or Server Components) and passes an
          opaque query handle to Client Components.
        </p>
        <p>
          <code>preloadQuery()</code> loads data on the server, where all
          queries executed within a request are run at a consistent snapshot.
        </p>
        <p>
          <code>usePreloadedQuery()</code> extracts the server rendered result
          and query description from a query handle. It uses the server rendered
          result during hydration and then uses the query description to restart
          the subscription with Convex for live updates.
        </p>
        <JsHighlighter>{preloadSnippetServer}</JsHighlighter>
        <p />
        <JsHighlighter>{preloadSnippetClient}</JsHighlighter>
      </article>
    </>
  );
}
