import { MeterIndicator, MeterLabel, MeterRoot, MeterTrack, MeterValue } from "./meter";

export const Meter = Object.assign(MeterRoot, {
  Indicator: MeterIndicator,
  Label: MeterLabel,
  Root: MeterRoot,
  Track: MeterTrack,
  Value: MeterValue,
});

export * from "./meter";

export type { MeterVariants } from "./meter.variants";
export { meterVariants } from "./meter.variants";
