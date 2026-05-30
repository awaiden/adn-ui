import { RadioGroupItem } from "./radio-group-item";
import { RadioGroupRoot } from "./radio-group-root";

export const RadioGroup = {
  Item: RadioGroupItem,
  Root: RadioGroupRoot,
};

export { RadioGroupItem, RadioGroupRoot };

export type { RadioGroupItemProps } from "./radio-group-item";

export type { RadioGroupRootProps } from "./radio-group-root";

export { RadioGroupContext, useRadioGroupContext } from "./radio-group.context";
export { type RadioGroupVariants, radioGroupVariants } from "./radio-group.variants";
