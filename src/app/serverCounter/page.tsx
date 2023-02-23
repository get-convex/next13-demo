import React from "react";

import { ReactiveServerContext } from "@convex-dev/next-experimental";
import Counter from "./Counter";
import Link from "next/link";
import JsHighlighter from "@/components/JsHighlighter";

const serverComponentSnippet = `
function Counter() {
  const count = await reactiveServerQuery("counter:get");
  ...
}
`.trim();

const wrapperSnippet = `
function CounterPage() {
  return <ReactiveServerContext><Counter /></ReactiveServerContext>;
}
`.trim();

export default async function CounterPage() {
  return (
    <article className="prose prose:xl dark:prose-invert pt-3 max-w-full">
      <p>
        The counter below is a Server Component that leverages a new Convex{" "}
        <code>reactiveServerQuery</code> function to fetch data. Whenever the
        data changes the page is refreshed to refetch the Server Component.
      </p>
      <ReactiveServerContext>
        <div className="not-prose shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg my-2 p-4">
          {/* @ts-expect-error async Server Component */}
          <Counter />
        </div>
      </ReactiveServerContext>
      <p>
        The developer needs to nest the server component inside a new Convex{" "}
        <code>ReactiveServerContext</code>:
      </p>
      <JsHighlighter>{serverComponentSnippet}</JsHighlighter>
      <JsHighlighter>{wrapperSnippet}</JsHighlighter>
      <p>
        The <code>reactiveServerQuery</code> uses{" "}
        <code>nextInjectIntoStream()</code>, similarly to <code>useQuery</code>{" "}
        in the <Link href="/chat">Streaming SSR approach</Link>. The{" "}
        <code>ReactiveServerContext</code>
        is a Client Component that uses the data from the stream to decide when
        to refresh the page.
      </p>
      <p>
        This approach is currently limited by our inability to specify exactly
        which portion of the page should be refreshed. It could also lead to
        oversubscription, where we would reload a page because it previously
        rendered some data it no longer needs. We expect that some of these
        problems will have to be solved by React and Next.js in the future.
      </p>
    </article>
  );
}
