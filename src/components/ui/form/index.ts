import { FormRoot } from "./form";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/form/content.md
 */
export const Form = {
  Root: FormRoot,
};

export { FormRoot };

export type { FormProps } from "./form";
export { FormContext, useFormContext } from "./form.context";
export { type FormVariants, formVariants } from "./form.variants";
