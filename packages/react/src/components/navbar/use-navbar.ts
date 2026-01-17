import React from "react";

import { NavbarContext } from "./navbar.context";

export const useNavbar = () => {
  const context = React.useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }

  return context;
};
