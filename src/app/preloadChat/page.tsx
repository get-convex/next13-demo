import { convexToJson } from "convex/values";
import { preloadQuery } from "../_generated";
import { headers } from 'next/headers';
import PageContext from "./PageContext";

const escapeQuote = (str: string) => str.replace(/"/g, '\\"');

async function PageContents() {
  const url = new URL(headers().get("x-url")!);
  const page = url.pathname;
  const query = "listChannels:countChannels";
  const args: any[] = [];
  const [count] = await preloadQuery(query)

  const injectToStream = (globalThis as any).nextInjectToStream;
  const k = escapeQuote(page);
  const v = escapeQuote(JSON.stringify({page, query, args: convexToJson(args), value: convexToJson(count) }));
  injectToStream(
    `<script>self.__convexRSC = self.__convexRSC ?? {}; (self.__convexRSC["${k}"] = self.__convexRSC["${k}"] ?? []).push("${v}");</script>`
  );
  return (
    <>
      Pick a channel on the left ({count} choices)
    </>
  )
}

export default async function ChatPage() {
  const PageContents_ = PageContents as any;
  return (
    <div className="flex justify-center flex-grow items-center">
      <PageContext>
        <PageContents_ />
      </PageContext>
    </div>
  );
}
