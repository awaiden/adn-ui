import { ToggleRoot as ToggleGroupItem, ToggleRoot as ToggleItem } from "../toggle";
import { ToggleGroupRoot } from "./toggle-group";

export const ToggleGroup = {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
};

export { ToggleGroupItem, ToggleItem, ToggleGroupRoot };

export type { ToggleGroupProps } from "./toggle-group";
export { ToggleGroupContext, useToggleGroupContext } from "./toggle-group.context";
export { type ToggleGroupVariants, toggleGroupVariants } from "./toggle-group.variants";
