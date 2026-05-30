import { createContext, useContext } from "react";

import { cardVariants } from "./card.variants";

export type CardContext = {
  slots: ReturnType<typeof cardVariants>;
};

export const CardContext = createContext<CardContext | null>(null);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
