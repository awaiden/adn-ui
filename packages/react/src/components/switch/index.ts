import { SwitchThumb, SwitchRoot } from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});

export * from "./switch";
export * from "./switch.variants";
