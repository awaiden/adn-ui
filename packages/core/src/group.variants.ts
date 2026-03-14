import { tv, type VariantProps } from "tailwind-variants";

export const groupVariants = tv({
	slots: {
		prefix: "group__prefix",
		root: "group",
		suffix: "group__suffix",
	},
});

export type GroupVariants = VariantProps<typeof groupVariants>;
