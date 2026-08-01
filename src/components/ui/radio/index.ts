import { RadioGroup, RadioGroupRoot, RadioIndicator, RadioItem, RadioRoot } from "./radio";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/radio/content.md
 */
export const Radio = {
  Group: RadioGroup,
  Indicator: RadioIndicator,
  Item: RadioItem,
  Root: RadioRoot,
};

export { RadioGroup, RadioGroupRoot, RadioIndicator, RadioItem, RadioRoot };

export type { RadioGroupProps, RadioIndicatorProps, RadioProps } from "./radio";
export { RadioContext, useRadioContext } from "./radio.context";
export { type RadioVariants, radioVariants } from "./radio.variants";
