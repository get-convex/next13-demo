import Image from "next/image";
import { ConvexServerProvider } from "@convex-dev/next-experimental";

import { UserContext } from "./UserContext";
import "./globals.css";
import Menu from "./components/Menu";

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
          <Menu />
          <UserContext.Provider value={user}>{children}</UserContext.Provider>
          <div className="flex justify-center my-12">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <Image
              className="dark:invert ml-2"
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </body>
      </ConvexServerProvider>
    </html>
  );
}
