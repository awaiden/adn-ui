import { Toolbar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useToolbarContext } from "./toolbar.context";

export type ToolbarLinkProps = React.ComponentProps<typeof Toolbar.Link>;

export const ToolbarLink = ({ className, ...props }: ToolbarLinkProps) => {
  const { slots } = useToolbarContext();

  return <Toolbar.Link className={cn(slots.link(), className)} {...props} />;
};
