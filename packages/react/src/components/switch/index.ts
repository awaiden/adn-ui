import { SwitchThumb, SwitchRoot } from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});

export * from "./switch";
export type * from "./switch";

export { switchVariants, type SwitchVariants } from "./switch.variants";
