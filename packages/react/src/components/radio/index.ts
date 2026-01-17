import { RadioIndicator, RadioRoot } from "./radio";

export const Radio = Object.assign(RadioRoot, {
  Indicator: RadioIndicator,
  Root: RadioRoot,
});

export * from "./radio";

export type { RadioVariants } from "./radio.variants";
export { radioVariants } from "./radio.variants";
