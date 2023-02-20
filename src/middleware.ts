import { headerMiddlewareHack } from "@convex-dev/next-experimental"

export function middleware(request: Request) {
  return headerMiddlewareHack(request);
}