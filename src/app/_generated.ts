import type { API } from "../../convex/_generated/api";

import {
  PreloadQueryForAPI,
  preloadQueryGeneric,
  QueryForAPI,
  queryGeneric,
  UsePreloadedQueryForAPI,
  usePreloadedQueryGeneric,
  useQueryGeneric,
  reactiveServerQueryGeneric,
  ReactiveServerQueryForAPI,
} from "@convex-dev/next-experimental";
import type { UseQueryForAPI } from "@convex-dev/next-experimental";

export const useQuery: UseQueryForAPI<API> = useQueryGeneric;
export const query: QueryForAPI<API> = queryGeneric;
export const preloadQuery: PreloadQueryForAPI<API> = preloadQueryGeneric;
export const usePreloadedQuery: UsePreloadedQueryForAPI<API> =
  usePreloadedQueryGeneric;
export const reactiveServerQuery: ReactiveServerQueryForAPI<API> = reactiveServerQueryGeneric;