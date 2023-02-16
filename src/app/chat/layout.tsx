import { UserBadge } from "../UserBadge";

import ChannelPicker from "./UseQueryChannelPicker";
import JsHighlighter from "../components/JsHighlighter";

const clientComponentSnippet = `
function ClientComponent() {
  const channels = useQuery("listChannels");
  ...
}
`.trim();

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4">
        <div className="flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold">Convex Chat</h2>
          <UserBadge />
        </div>
        <div className="flex flex-grow items-stretch">
          <ChannelPicker />
          {props.children}
        </div>
      </div>
      <article className="prose prose:xl dark:prose-invert pt-6 max-w-full">
        <p>
          This demo showcases the experimental Suspense-aware{" "}
          <code>useQuery</code> hook, which enables Client Components to
          automatically get SSR and precise hydration out of the box without any
          modifications.
        </p>
        <JsHighlighter>{clientComponentSnippet}</JsHighlighter>
        <p>
          By integrating with Suspense, this approach to data fetching entirely
          prevents flickers whether the component is prerendered on the server
          or initially rendered on the client (e.g. due to a client-side
          navigation). Developers can also control the granularity of their
          loading states with{" "}
          <a href="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense#example-using-loadingjs">
            <code>loading.js</code>
          </a>{" "}
          or{" "}
          <a href="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense#example-using-suspense-boundaries">
            Suspense Boundaries
          </a>
          .
        </p>
        <p>
          <b>Warning</b>: <code>useQuery</code> uses the{" "}
          <a href="https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md">
            <code>use()</code>
          </a>{" "}
          hook and a build from{" "}
          <a href="https://www.npmjs.com/package/react/v/0.0.0-experimental-758fc7fde-20230207">
            React's experimental channel
          </a>
          . We've observed a{" "}
          <a href="https://github.com/facebook/react/issues/25964">React bug</a>{" "}
          when a single component contains more than one <code>useQuery()</code>
          .
        </p>
        <p>
          <b>Note</b>: Until we can{" "}
          <a href="https://github.com/brillout/rfcs/blob/main/text/0000-inject-to-stream.md">
            inject data into React's stream
          </a>
          , our server data loading library cannot communicate a variable amount
          of data to its client counterpart. For now, we work around this issue
          by having our Convex provider store the snapshot timestamp it uses
          during SSR. Then during hydration, our library replays the requests at
          this server timestamp, which prevents hydration mismatches but causes
          hydration to suspend, delaying TTI. Including the query results in the
          React stream would allow hydration to complete immediately.
        </p>
      </article>
    </>
  );
}
