import { Toggle as ToggleRootComponent, ToggleRoot } from "./toggle";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toggle/content.md
 */
export const Toggle = Object.assign(ToggleRootComponent, {
  Root: ToggleRoot,
});

export { ToggleRoot };

export type { ToggleProps } from "./toggle";
export { type ToggleVariants, toggleVariants } from "./toggle.variants";

