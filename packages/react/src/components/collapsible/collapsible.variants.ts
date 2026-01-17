import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
  slots: {
    content: "collapsible__content",
    panel: "collapsible__panel",
    root: "collapsible",
    trigger: "collapsible__trigger",
    triggerIcon: "collapsible__trigger-icon",
  },
});

export type CollapsibleVariants = VariantProps<typeof collapsibleVariants>;
