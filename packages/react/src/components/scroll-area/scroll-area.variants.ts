/** biome-ignore-all assist/source/useSortedKeys: <> */
import { tv, type VariantProps } from "tailwind-variants";

export const scrollAreaVariants = tv({
  slots: {
    root: "scroll-area",
    viewport: "scroll-area__viewport",
    content: "scroll-area__content",

    scrollbar: "scroll-area__scrollbar",
    thumb: "scroll-area__thumb",
    corner: "scroll-area__corner",
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaVariants>;
