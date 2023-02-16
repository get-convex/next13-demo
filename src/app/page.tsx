import Link from "next/link";
import React from "react";
import JsHighlighter from "./components/JsHighlighter";

const preloadSnippetServer = `
// page.jsx
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const [queryResult, queryHandle] = await preloadQuery("getCounter");
  return (
    <div>
      <ClientComponent queryHandle={queryHandle} />
    </div>
  );
}
`.trim();

const preloadSnippetClient = `
// ClientComponent.jsx
"use client";
export default function ClientComponent(props) {
  const queryResult = usePreloadedQuery(props.queryHandle);
  return <div>{queryResult}</div>;
}
`.trim();

const useSnippet = `
// ClientComponent.jsx
"use client";
export default function ClientComponent() {
  const queryResult = useQuery("getCounter");
  return <div>{queryResult}</div>;
}
`.trim();

export default async function Home() {
  return (
    <article className="prose prose:xl dark:prose-invert pt-6 max-w-full">
      <p>
        This demo app presents two APIs for deep integration between Next.js 13
        and Convex. Server Components, Server Side Rendering of Client
        Components, precise hydration, live updates, and client navigations all
        Just Work™ with these APIs.
      </p>
      <Link href="/preloadChat">
        <h2>usePreloadedQuery()</h2>
      </Link>
      <p>
        Our first API allows developers to <i>preload</i> queries within their
        Server Components, returning an opaque query handle that they can pass
        to their Client Components. This approach does not require any bleeding
        edge React or Next.js features and can even work with
        <code>getServerSideProps</code> on Next 12.
      </p>
      <JsHighlighter>{preloadSnippetServer}</JsHighlighter>
      <p></p>
      <JsHighlighter>{preloadSnippetClient}</JsHighlighter>
      <h2>useQuery()</h2>
      <p>
        The second API leverages Suspense to provide a better DX for Convex
        queries within Client Components. Instead of needing to preload their
        queries, developers can call <code>useQuery</code> directly.
      </p>
      <JsHighlighter>{useSnippet}</JsHighlighter>
      <p>
        Then, the component suspends during initial page load, and the developer
        can decide via Suspense Boundaries whether they'd like to include the
        results in their initial HTML response or subsequent streaming updates.
      </p>
    </article>
  );
}
