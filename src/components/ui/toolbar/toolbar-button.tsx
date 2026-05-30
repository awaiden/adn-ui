import { Toolbar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useToolbarContext } from "./toolbar.context";

export type ToolbarButtonProps = React.ComponentProps<typeof Toolbar.Button>;

export const ToolbarButton = ({ className, ...props }: ToolbarButtonProps) => {
  const { slots } = useToolbarContext();

  return <Toolbar.Button className={cn(slots.button(), className)} {...props} />;
};
