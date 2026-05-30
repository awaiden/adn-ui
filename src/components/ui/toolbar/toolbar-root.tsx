import "./toolbar.css";

import { Toolbar } from "radix-ui";
import { cn } from "tailwind-variants";

import { ToolbarContext } from "./toolbar.context";
import { toolbarVariants } from "./toolbar.variants";

export type ToolbarRootProps = React.ComponentProps<typeof Toolbar.Root>;

export const ToolbarRoot = ({ className, ...props }: ToolbarRootProps) => {
  const slots = toolbarVariants();

  return (
    <ToolbarContext value={{ slots }}>
      <Toolbar.Root className={cn(slots.root(), className)} {...props} />
    </ToolbarContext>
  );
};
