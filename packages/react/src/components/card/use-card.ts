import { useContext } from "react";

import { CardContext } from "./card.context";

export const useCard = () => {
  const ctx = useContext(CardContext);

  if (!ctx) {
    throw new Error("CardContext must be used with in the Card component.");
  }

  return ctx;
};
