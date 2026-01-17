import { useContext } from "react";

import { AccordionContext } from "./accordion.context";

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within a AccordionProvider");
  }

  return context;
};
