import { tv, type VariantProps } from "tailwind-variants";

export const radioGroupVariants = tv({
	slots: {
		root: "radio-group",
		item: "radio-group__item",
		indicator: "radio-group__indicator",
	},
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
