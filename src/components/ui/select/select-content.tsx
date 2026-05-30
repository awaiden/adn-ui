import { ChevronDown, ChevronUp } from "lucide-react";
import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select.context";

export type SelectContentProps = React.ComponentProps<typeof Select.Content>;

export const SelectContent = ({
  children,
  className,
  position = "popper",
  ...props
}: SelectContentProps) => {
  const { slots } = useSelectContext();

  return (
    <Select.Portal>
      <Select.Content className={cn(slots.content(), className)} position={position} {...props}>
        <Select.ScrollUpButton className={slots.scrollButton()}>
          <ChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className={slots.viewport()}>{children}</Select.Viewport>
        <Select.ScrollDownButton className={slots.scrollButton()}>
          <ChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  );
};
