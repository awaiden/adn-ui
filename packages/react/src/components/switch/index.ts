import { SwitchRoot, SwitchThumb } from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});

export * from "./switch";

export type { SwitchVariants } from "./switch.variants";
export { switchVariants } from "./switch.variants";
