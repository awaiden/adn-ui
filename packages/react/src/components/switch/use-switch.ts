import { useContext } from "react";

import { SwitchContext } from "./switch.context";

export const useSwitch = () => {
  const context = useContext(SwitchContext);

  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider");
  }

  return context;
};
