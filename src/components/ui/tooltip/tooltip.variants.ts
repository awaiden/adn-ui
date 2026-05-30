import { tv, type VariantProps } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    content: "tooltip__content",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
