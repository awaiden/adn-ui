import { AspectRatio, AspectRatioRoot } from "./aspect-ratio";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/aspect-ratio/content.md
 */
export const AspectRatioContainer = {
  Root: AspectRatioRoot,
};

export { AspectRatio, AspectRatioRoot };

export type { AspectRatioProps } from "./aspect-ratio";
export { AspectRatioContext, useAspectRatioContext } from "./aspect-ratio.context";
export { type AspectRatioVariants, aspectRatioVariants } from "./aspect-ratio.variants";
