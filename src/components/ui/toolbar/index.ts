import { ToolbarButton } from "./toolbar-button";
import { ToolbarLink } from "./toolbar-link";
import { ToolbarRoot } from "./toolbar-root";
import { ToolbarSeparator } from "./toolbar-separator";
import { ToolbarToggleGroup } from "./toolbar-toggle-group";
import { ToolbarToggleItem } from "./toolbar-toggle-item";

export const Toolbar = {
  Button: ToolbarButton,
  Link: ToolbarLink,
  Root: ToolbarRoot,
  Separator: ToolbarSeparator,
  ToggleGroup: ToolbarToggleGroup,
  ToggleItem: ToolbarToggleItem,
};

export {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
};

export { ToolbarContext, useToolbarContext } from "./toolbar.context";

export { type ToolbarVariants, toolbarVariants } from "./toolbar.variants";
