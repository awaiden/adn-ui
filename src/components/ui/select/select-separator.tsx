import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select.context";

export type SelectSeparatorProps = React.ComponentProps<typeof Select.Separator>;

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  const { slots } = useSelectContext();

  return <Select.Separator className={cn(slots.separator(), className)} {...props} />;
};
