import { tv, type VariantProps } from "tailwind-variants";

export const tooltipVariants = tv({
	slots: {
		content: "tooltip__content",
		arrow: "tooltip__arrow",
	},
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
