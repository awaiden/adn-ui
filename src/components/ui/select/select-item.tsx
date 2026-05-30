import { Check } from "lucide-react";
import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select.context";

export type SelectItemProps = React.ComponentProps<typeof Select.Item>;

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  const { slots } = useSelectContext();

  return (
    <Select.Item className={cn(slots.item(), className)} {...props}>
      <Select.ItemIndicator className={slots.itemIndicator()}>
        <Check />
      </Select.ItemIndicator>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};
