import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

export default function MenuItem({
  forceRefresh,
  href,
  selected,
  children,
}: {
  forceRefresh?: boolean;
  href: string;
  selected: string | null;
  children: ReactNode;
}) {
  const Component = forceRefresh === true ? "a" : Link;
  return (
    <Component
      className={classNames(
        "flex gap-1 max-md:border-l-2 md:border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 py-2 px-3 md:first:pl-0",
        (selected !== null ? href.endsWith(selected) : href === "/")
          ? "border-amber-600"
          : "border-transparent"
      )}
      href={href}
    >
      {children}
    </Component>
  );
}
