import { Spinner, SpinnerRoot } from "./spinner";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/spinner/content.md
 */
export const SpinnerContainer = {
  Root: SpinnerRoot,
};

export { Spinner, SpinnerRoot };

export type { SpinnerProps } from "./spinner";
export { SpinnerContext, useSpinnerContext } from "./spinner.context";
export { type SpinnerVariants, spinnerVariants } from "./spinner.variants";
