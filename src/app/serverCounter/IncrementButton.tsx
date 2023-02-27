"use client";

import { useMutation } from "../../../convex/_generated/react";
import React from "react";
import Button from "@/components/Button";

export default function IncrementButton() {
  const increment = useMutation("counter:increment");
  return <Button onClick={() => increment()} />;
}
