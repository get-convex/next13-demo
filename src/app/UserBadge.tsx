"use client";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export function UserBadge() {
  const user = useContext(UserContext);
  return <span>{user}</span>;
}
