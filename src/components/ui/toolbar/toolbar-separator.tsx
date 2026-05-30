import { Toolbar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useToolbarContext } from "./toolbar.context";

export type ToolbarSeparatorProps = React.ComponentProps<typeof Toolbar.Separator>;

export const ToolbarSeparator = ({ className, ...props }: ToolbarSeparatorProps) => {
  const { slots } = useToolbarContext();

  return <Toolbar.Separator className={cn(slots.separator(), className)} {...props} />;
};
