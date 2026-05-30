import { Toolbar } from "radix-ui";

export type ToolbarToggleGroupProps = React.ComponentProps<typeof Toolbar.ToggleGroup>;

export const ToolbarToggleGroup = (props: ToolbarToggleGroupProps) => {
  return <Toolbar.ToggleGroup {...props} />;
};
