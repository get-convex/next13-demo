import { reactiveServerQuery } from "../_generated";
import { ReactiveServerContext } from "@convex-dev/next-experimental";

async function PageContents() {
  const count = await reactiveServerQuery("listChannels:countChannels");
  return (
    <>
      Pick a channel on the left ({count} choices)
    </>
  )
}

export default async function ChatPage() {
  const PageContents_ = PageContents as any;
  return (
    <div className="flex justify-center flex-grow items-center">
      {/* <ReactiveServerContext>
        <PageContents_ />
      </ReactiveServerContext> */}
      hi
    </div>
  );
}
