import { ToggleRoot } from "./toggle";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toggle/content.md
 */
export const Toggle = {
  Root: ToggleRoot,
};

export { ToggleRoot };

export type { ToggleProps } from "./toggle";
export { ToggleContext, useToggleContext } from "./toggle.context";
export { type ToggleVariants, toggleVariants } from "./toggle.variants";
