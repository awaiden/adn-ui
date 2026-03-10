import { tv, type VariantProps } from "tailwind-variants";

export const sliderVariants = tv({
	slots: {
		root: "slider",
		track: "slider__track",
		range: "slider__range",
		thumb: "slider__thumb",
	},
	variants: {
		size: {
			sm: {
				root: "slider--sm",
				track: "slider__track--sm",
				thumb: "slider__thumb--sm",
			},
			md: {
				root: "slider--md",
				track: "slider__track--md",
				thumb: "slider__thumb--md",
			},
			lg: {
				root: "slider--lg",
				track: "slider__track--lg",
				thumb: "slider__thumb--lg",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
