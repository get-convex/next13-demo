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
      <div className="flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <div className="pt-4 px-4 flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
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
          In order to send data for hydration in the browser, the hook leverage
          React streaming, if available. To demonstrate this, the app uses a{" "}
          <a href="https://github.com/vercel/next.js/commit/32242e5e91173de4691a155f3835e80ac15443e5">
            modified
          </a>{" "}
          version of NEXT.js that exposes <code>nextInjectIntoStream()</code>.
          The approach is inspired by{" "}
          <a href="https://github.com/brillout/rfcs/blob/main/text/0000-inject-to-stream.md">
            injectToStream RFC
          </a>
          . We anticipate the ability to inject to the React stream or an alternative to be eventually available in
          React or NEXT.js.
        </p>
        <p>
          The <code>useQuery</code> hook also works with unmodified versions
          NEXT.js. When the hydration data is not provided in the stream, our
          library replays the requests at this server timestamp used during SSR.
          This prevents hydration mismatches but causes hydration to suspend,
          delaying TTI. <b>Warning</b>: We have observed the following{" "}
          <a href="https://github.com/facebook/react/issues/25964">React bug</a>{" "}
          when <code>nextInjectIntoStream()</code> is not available and more than one{" "}
          <code>useQuery()</code> hook suspend during hydration.
        </p>
      </article>
    </>
  );
}
