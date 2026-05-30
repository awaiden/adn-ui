import { tv, type VariantProps } from "tailwind-variants";

export const hoverCardVariants = tv({
  slots: {
    content: "hover-card__content",
  },
});

export type HoverCardVariants = VariantProps<typeof hoverCardVariants>;
