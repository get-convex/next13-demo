"use client";

import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import ConvexLogo from "./ConvexLogo";

export default function Menu() {
  const selected = useSelectedLayoutSegment();
  return (
    <ul className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
      <MenuItem href="/" selected={selected}>
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
      </MenuItem>
      <MenuItem href="/preloadChat" selected={selected}>
        usePreloadedQuery()
      </MenuItem>
      <MenuItem href="/chat" selected={selected}>
        useQuery()
      </MenuItem>
    </ul>
  );
}

function MenuItem({
  href,
  selected,
  children,
}: {
  href: string;
  selected: string | null;
  children: ReactNode;
}) {
  return (
    <Link
      className={classNames(
        "flex gap-1 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 py-2 px-3 first:pl-0",
        (selected !== null ? href.endsWith(selected) : href === "/")
          ? "border-amber-600"
          : "border-transparent"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
