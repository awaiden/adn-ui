import { tv, type VariantProps } from "tailwind-variants";

export const radioGroupVariants = tv({
	slots: {
		indicator: "radio-group__indicator",
		item: "radio-group__item",
		root: "radio-group",
	},
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
