import "./toggle-group.css";

import { ToggleGroup } from "radix-ui";
import { cn } from "tailwind-variants";

import { ToggleGroupContext } from "./toggle-group.context";
import { toggleGroupVariants } from "./toggle-group.variants";

export type ToggleGroupRootProps = React.ComponentProps<typeof ToggleGroup.Root>;

export const ToggleGroupRoot = ({ className, ...props }: ToggleGroupRootProps) => {
  const slots = toggleGroupVariants();

  return (
    <ToggleGroupContext value={{ slots }}>
      <ToggleGroup.Root className={cn(slots.root(), className)} {...props} />
    </ToggleGroupContext>
  );
};
