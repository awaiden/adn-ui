import { ToggleGroup } from "radix-ui";
import { cn } from "tailwind-variants";

import { useToggleGroupContext } from "./toggle-group.context";

export type ToggleGroupItemProps = React.ComponentProps<typeof ToggleGroup.Item>;

export const ToggleGroupItem = ({ className, ...props }: ToggleGroupItemProps) => {
  const { slots } = useToggleGroupContext();

  return <ToggleGroup.Item className={cn(slots.item(), className)} {...props} />;
};
