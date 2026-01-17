import { tv, type VariantProps } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    arrow: "tooltip__arrow",
    popup: "tooltip__popup",
    portal: "tooltip__portal",
    positioner: "tooltip__positioner",
    root: "tooltip",
    trigger: "tooltip__trigger",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
