/** biome-ignore-all assist/source/useSortedKeys: <> */
import { tv, type VariantProps } from "tailwind-variants";

export const previewCardVariants = tv({
  slots: {
    root: "preview-card",
    trigger: "preview-card__trigger",

    portal: "preview-card__portal",
    backdrop: "preview-card__backdrop",
    positioner: "preview-card__positioner",
    popup: "preview-card__popup",
    arrow: "preview-card__arrow",
  },
});

export type PreviewCardVariants = VariantProps<typeof previewCardVariants>;
