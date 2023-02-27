import React from "react";

export const UserContext = React.createServerContext<string>("user", "");
