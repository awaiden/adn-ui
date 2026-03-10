import { tv, type VariantProps } from "tailwind-variants";

export const groupVariants = tv({
	slots: {
		root: "group",
		prefix: "group__prefix",
		suffix: "group__suffix",
	},
});

export type GroupVariants = VariantProps<typeof groupVariants>;
