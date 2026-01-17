import { useContext } from "react";

import { ScrollAreaContext } from "./scroll-area.context";

export const useScrollArea = () => {
  const context = useContext(ScrollAreaContext);

  if (!context) {
    throw new Error("useScrollArea must be used within a ScrollAreaProvider");
  }

  return context;
};
