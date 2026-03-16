import { cn } from "@adn-ui/core";
import { ChevronDown } from "lucide-react";
import { Select } from "radix-ui";

import { useSelectContext } from "./select-context";

export type SelectTriggerProps = React.ComponentProps<typeof Select.Trigger>;

export default function SelectTrigger({ children, className, ...props }: SelectTriggerProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Trigger
      data-slot="select-trigger"
      className={cn(slots.trigger(), className)}
      {...props}
    >
      {children}
      <Select.Icon asChild>
        <ChevronDown className={slots.icon()} />
      </Select.Icon>
    </Select.Trigger>
  );
}
