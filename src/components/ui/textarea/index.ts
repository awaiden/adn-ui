import { TextareaRoot } from "./textarea";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/textarea/content.md
 */
export const Textarea = {
  Root: TextareaRoot,
};

export { TextareaRoot };

export type { TextareaProps } from "./textarea";
export { TextareaContext, useTextareaContext } from "./textarea.context";
export { type TextareaVariants, textareaVariants } from "./textarea.variants";
