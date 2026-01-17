import { useContext } from "react";

import { TooltipContext } from "./tooltip.context";

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};
