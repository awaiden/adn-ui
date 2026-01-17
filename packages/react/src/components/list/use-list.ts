import { useContext } from "react";

import { ListContext } from "./list.context";

export const useList = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }

  return context;
};
