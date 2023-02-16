"use client";

import { useMutation } from "../../../convex/_generated/react";
import { useQuery } from "../_generated";

export function Counter() {
  const value = useQuery("counter:get");
  const increment = useMutation("counter:increment");
  return (
    <div>
      <p>Client rendered counter: {value}</p>
      <button
        className="bg-gray-300 dark:bg-gray-700  py-1 px-4 rounded-md h-8 hover:bg-gray-400 dark:hover:bg-gray-600"
        onClick={() => increment()}
      >
        Increment
      </button>
    </div>
  );
}
