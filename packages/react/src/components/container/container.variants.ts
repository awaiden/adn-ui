import { tv, type VariantProps } from "tailwind-variants";

export const containerVariants = tv({
  base: "container",
});

export type ContainerVariants = VariantProps<typeof containerVariants>;
