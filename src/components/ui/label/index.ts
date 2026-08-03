import { Label as LabelRootComponent, LabelRoot } from "./label";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/label/content.md
 */
export const Label = Object.assign(LabelRootComponent, {
  Root: LabelRoot,
});

export { LabelRoot };
export type { LabelProps } from "./label";
export { type LabelVariants, labelVariants } from "./label.variants";
