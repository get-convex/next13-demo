import { ReactNode } from "react";

export default function ChatUI({
  userBadge,
  children,
}: {
  userBadge: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="not-prose flex flex-col shadow-inner bg-zinc-100 dark:bg-zinc-900 rounded-lg my-2">
      <div className="pt-4 px-4 flex justify-between items-end border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold">Convex Chat</h2>
        {userBadge}
      </div>
      <div className="flex flex-col md:flex-row flex-grow items-stretch">
        {children}
      </div>
    </div>
  );
}
