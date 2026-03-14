import { Check } from "lucide-react";
import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select-context";

export type SelectItemProps = React.ComponentProps<typeof Select.Item>;

export default function SelectItem({ children, className, ...props }: SelectItemProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Item data-slot="select-item" className={cn(slots.item(), className)} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={slots.itemIndicator()}>
        <Check className="size-4" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
