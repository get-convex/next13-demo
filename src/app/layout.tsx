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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ConvexServerProvider>
        <body className="max-w-4xl pt-4 mx-auto flex flex-col">
          <article className="prose prose:xl dark:prose-invert pt-6 max-w-full">
            <h1>Convex + Next.js</h1>
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
            <div className="not-prose">
              <div className="flex items-center justify-center my-12">
                <ConvexLogo width={100} height={24} />
                +
                <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js"
                  width={68}
                  height={20}
                  priority
                />
              </div>
            </div>
          </article>
        </body>
      </ConvexServerProvider>
    </html>
  );
}
