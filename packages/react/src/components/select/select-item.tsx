import { Check } from "lucide-react";
import { Select } from "radix-ui";

import { useSelectContext } from "./select-context";

export type SelectItemProps = React.ComponentProps<typeof Select.Item>;

export default function SelectItem({ children, className, ...props }: SelectItemProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Item className={slots.item({ className })} data-slot="select-item" {...props}>
      <Select.ItemIndicator className={slots.itemIndicator()}>
        <Check className={slots.itemIndicatorIcon()} />
      </Select.ItemIndicator>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
}
