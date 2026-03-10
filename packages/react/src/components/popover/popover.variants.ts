import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
	slots: {
		content: "popover__content",
		close: "popover__close",
		arrow: "popover__arrow",
	},
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
