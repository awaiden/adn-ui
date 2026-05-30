import { Toolbar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useToolbarContext } from "./toolbar.context";

export type ToolbarToggleItemProps = React.ComponentProps<typeof Toolbar.ToggleItem>;

export const ToolbarToggleItem = ({ className, ...props }: ToolbarToggleItemProps) => {
  const { slots } = useToolbarContext();

  return <Toolbar.ToggleItem className={cn(slots.toggleItem(), className)} {...props} />;
};
