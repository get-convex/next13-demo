import React from "react";
import { Counter } from "./counter";
import { preloadQuery } from "../_generated";

export default async function Home() {
  const [counter] = await preloadQuery("counter:get");
  return (
    <>
      <p>Server rendered counter: {counter}</p>
      <Counter />
    </>
  );
}
