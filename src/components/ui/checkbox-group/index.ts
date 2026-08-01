import { CheckboxGroupRoot } from "./checkbox-group";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/checkbox-group/content.md
 */
export const CheckboxGroup = {
  Root: CheckboxGroupRoot,
};

export { CheckboxGroupRoot };

export type { CheckboxGroupProps } from "./checkbox-group";
export { CheckboxGroupContext, useCheckboxGroupContext } from "./checkbox-group.context";
export { type CheckboxGroupVariants, checkboxGroupVariants } from "./checkbox-group.variants";
