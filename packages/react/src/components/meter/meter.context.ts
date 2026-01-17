import { createContext } from "react";

import type { meterVariants } from "./meter.variants";

export interface MeterContext {
  slots: ReturnType<typeof meterVariants>;
}

export const MeterContext = createContext<MeterContext | undefined>(undefined);
