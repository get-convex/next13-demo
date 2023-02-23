"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import MenuItem from "../components/MenuItem";

export default function Menu() {
  const selected = useSelectedLayoutSegment();
  return (
    <ul className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
      <MenuItem href="/chat" selected={selected}>
        Streaming SSR
      </MenuItem>
      <MenuItem href="/preloadChat" selected={selected}>
        Props-based SSR
      </MenuItem>
      <MenuItem href="/serverCounter" selected={selected}>
        Server Components
      </MenuItem>
    </ul>
  );
}
