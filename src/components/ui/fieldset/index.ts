import { FieldsetDescription, FieldsetLegend, FieldsetRoot } from "./fieldset";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/fieldset/content.md
 */
export const Fieldset = {
  Description: FieldsetDescription,
  Legend: FieldsetLegend,
  Root: FieldsetRoot,
};

export { FieldsetDescription, FieldsetLegend, FieldsetRoot };

export type { FieldsetDescriptionProps, FieldsetLegendProps, FieldsetProps } from "./fieldset";
export { FieldsetContext, useFieldsetContext } from "./fieldset.context";
export { type FieldsetVariants, fieldsetVariants } from "./fieldset.variants";
