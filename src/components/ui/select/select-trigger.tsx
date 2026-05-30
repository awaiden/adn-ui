import { ChevronDown } from "lucide-react";
import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select.context";

export type SelectTriggerProps = React.ComponentProps<typeof Select.Trigger>;

export const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => {
  const { slots } = useSelectContext();

  return (
    <Select.Trigger className={cn(slots.trigger(), className)} {...props}>
      {children}
      <Select.Icon asChild>
        <ChevronDown className="size-4 opacity-50" />
      </Select.Icon>
    </Select.Trigger>
  );
};
