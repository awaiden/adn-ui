import { useContext } from "react";

import { RadioContext } from "./radio.context";

export const useRadio = () => {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error("useRadio must be used within a RadioProvider");
  }

  return context;
};
