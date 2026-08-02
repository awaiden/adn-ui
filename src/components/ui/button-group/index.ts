import {
  ButtonGroup,
  ButtonGroupItem,
  ButtonGroupRoot,
} from "./button-group";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/button-group/content.md
 */
export const ButtonGroupContainer = {
  Item: ButtonGroupItem,
  Root: ButtonGroupRoot,
};

export {
  ButtonGroup,
  ButtonGroupItem,
  ButtonGroupRoot,
};

export type {
  ButtonGroupProps,
} from "./button-group";
export { ButtonGroupContext, useButtonGroupContext } from "./button-group.context";
export { type ButtonGroupVariants, buttonGroupVariants } from "./button-group.variants";
