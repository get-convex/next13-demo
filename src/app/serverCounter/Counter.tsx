import { reactiveServerQuery } from "../_generated";
import IncrementButton from "./IncrementButton";

export default async function Counter() {
  const count = await reactiveServerQuery("counter:get");
  return (
    <>
      <p className="pb-2">Server rendered counter: {count}</p>
      <IncrementButton />
    </>
  );
}
