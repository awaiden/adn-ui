import { CheckboxIndicator, CheckboxRoot } from "./checkbox";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/checkbox/content.md
 */
export const Checkbox = {
  Indicator: CheckboxIndicator,
  Root: CheckboxRoot,
};

export { CheckboxIndicator, CheckboxRoot };

export type { CheckboxIndicatorProps, CheckboxProps } from "./checkbox";
export { CheckboxContext, useCheckboxContext } from "./checkbox.context";
export { type CheckboxVariants, checkboxVariants } from "./checkbox.variants";
