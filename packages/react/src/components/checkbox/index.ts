import { CheckboxRoot, CheckboxIndicator } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
});

export * from "./checkbox";
export * from "./checkbox.variants";
