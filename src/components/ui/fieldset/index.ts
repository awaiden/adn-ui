import { FieldsetLegend, FieldsetRoot } from "./fieldset";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/fieldset/content.md
 */
export const Fieldset = {
  Legend: FieldsetLegend,
  Root: FieldsetRoot,
};

export { FieldsetLegend, FieldsetRoot };

export type { FieldsetLegendProps, FieldsetProps } from "./fieldset";
export { FieldsetContext, useFieldsetContext } from "./fieldset.context";
export { type FieldsetVariants, fieldsetVariants } from "./fieldset.variants";
