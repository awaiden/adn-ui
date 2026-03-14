import { tv, type VariantProps } from "tailwind-variants";

export const scrollAreaVariants = tv({
  slots: {
    corner: "scroll-area__corner",
    root: "scroll-area",
    scrollbar: "scroll-area__scrollbar",
    thumb: "scroll-area__thumb",
    viewport: "scroll-area__viewport",
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaVariants>;
