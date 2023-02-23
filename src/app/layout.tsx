import Image from "next/image";
import { ConvexServerProvider } from "@convex-dev/next-experimental";

import { UserContext } from "./UserContext";
import "./globals.css";
import Menu from "./Menu";
import ConvexLogo from "../components/ConvexLogo";

export default function RootLayout({ children }: { children: any }) {
  const user = "User " + Math.floor(Math.random() * 10000);

  return (
    <html lang="en" className="dark:bg-zinc-800 dark:text-white">
      <head />
      <ConvexServerProvider>
        <body className="max-w-4xl pt-4 mx-auto flex flex-col">
          <article className="prose prose:xl dark:prose-invert pt-6 max-w-full">
            <div className="not-prose flex items-center gap-2 mb-8 text-4xl text-black dark:text-white font-bold">
              <ConvexLogo width={200} height={44} />
              +
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js"
                width={136}
                height={40}
                priority
              />
            </div>
            <p>
              This demo presents a deep integration between Next.js and Convex.
              We present three different approaches to rendering data persisted
              in Convex on the server side, with optimal client-side hydration
              and full reactivity.
            </p>
            <p>
              <i>
                The different approaches use an as-yet-unreleased Convex client
                and some rely on changes to Next.js
              </i>
            </p>
            <div className="not-prose">
              <Menu />
            </div>
            <UserContext.Provider value={user}>{children}</UserContext.Provider>
            <div className="not-prose mt-12 mb-4 text-center text-sm">
              ©2023 Convex, Inc.
            </div>
          </article>
        </body>
      </ConvexServerProvider>
    </html>
  );
}
