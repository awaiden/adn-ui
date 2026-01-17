import { tv, type VariantProps } from "tailwind-variants";

export const {{camel}}Variants = tv({
  base: "{{kebab}}",
});

export type {{Pascal}}Variants = VariantProps<typeof {{camel}}Variants>;