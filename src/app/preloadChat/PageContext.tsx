"use client";

import { useConvex } from "../../../convex/_generated/react";
import { usePathname, useRouter } from "next/navigation";
import { convexToJson, jsonToConvex } from "convex/values";
import { useEffect, useMemo } from "react";

export default function PageContext(props: {children: React.ReactNode}) {
  const pathname = usePathname()!;
  const convex = useConvex();
  const serverQueries = useMemo(() => {
    if (typeof window === "undefined") {
        return [];
    }
    const rsc = (window as any).__convexRSC;
    const queries: any[] = (rsc && rsc[pathname]) ?? [];
    return queries.map(q => {
        const parsed = JSON.parse(q);
        const name = parsed.query;
        const args = jsonToConvex(parsed.args);
        const watch = convex.watchQuery(name, args as any);
        const serverValue = jsonToConvex(parsed.value);
        return { name, args, watch, serverValue };
    });
  }, [convex]);
  console.log("serverQueries", serverQueries)
  const router = useRouter();
  useEffect(() => {
    const destructors: any[] = [];
    for (const query of serverQueries) {
        const watch = query.watch;
        const d = watch.onUpdate(() => {
            const currentResult = watch.localQueryResult();
            console.log("triggered", query, watch);
            if (currentResult !== undefined) {
                if (JSON.stringify(convexToJson(currentResult)) !== JSON.stringify(convexToJson(query.serverValue))) {
                    console.log("reloading");
                    router.refresh();
                }
            }
        })
        destructors.push(d);
    }
    return () => {
        for (const d of destructors) {
            d();
        }
    }
  }, [serverQueries]);

  return (
      <>
        {props.children}
      </>
  )
}