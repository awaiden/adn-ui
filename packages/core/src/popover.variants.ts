import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
	slots: {
		arrow: "popover__arrow",
		close: "popover__close",
		content: "popover__content",
	},
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
