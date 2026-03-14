import { tv, type VariantProps } from "tailwind-variants";

export const alertVariants = tv({
	slots: {
		root: "alert",
		title: "alert__title",
		description: "alert__description",
	},
	variants: {
		variant: {
			default: {
				root: "alert--default",
			},
			destructive: {
				root: "alert--destructive",
			},
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type AlertVariants = VariantProps<typeof alertVariants>;
