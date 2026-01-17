import { FieldsetLegend, FieldsetRoot } from "./fieldset";

export const Fieldset = Object.assign(FieldsetRoot, {
  Legend: FieldsetLegend,
  Root: FieldsetRoot,
});

export * from "./fieldset";

export type { FieldsetVariants } from "./fieldset.variants";
export { fieldsetVariants } from "./fieldset.variants";
