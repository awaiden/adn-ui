import { useContext } from "react";

import { MeterContext } from "./meter.context";

export const useMeter = () => {
  const context = useContext(MeterContext);

  if (!context) {
    throw new Error("useMeter must be used within a MeterProvider");
  }

  return context;
};
