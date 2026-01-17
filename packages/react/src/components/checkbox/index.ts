import { CheckboxIndicator, CheckboxRoot } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
  Root: CheckboxRoot,
});

export * from "./checkbox";

export type { CheckboxVariants } from "./checkbox.variants";
export { checkboxVariants } from "./checkbox.variants";
