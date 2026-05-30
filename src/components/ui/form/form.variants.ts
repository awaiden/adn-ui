import { tv, type VariantProps } from "tailwind-variants";

export const formVariants = tv({
  slots: {
    control: "form__control",
    field: "form__field",
    label: "form__label",
    message: "form__message",
    root: "form",
    submit: "form__submit",
  },
});

export type FormVariants = VariantProps<typeof formVariants>;
