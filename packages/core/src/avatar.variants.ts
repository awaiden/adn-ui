import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
	slots: {
		root: "avatar",
		image: "avatar__image",
		fallback: "avatar__fallback",
	},
	variants: {
		size: {
			sm: {
				root: "avatar--sm",
			},
			md: {
				root: "avatar--md",
			},
			lg: {
				root: "avatar--lg",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
