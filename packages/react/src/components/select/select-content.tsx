import { ChevronDown, ChevronUp } from "lucide-react";
import { Select } from "radix-ui";

import { useSelectContext } from "./select-context";

export type SelectContentProps = React.ComponentProps<typeof Select.Content>;

export default function SelectContent({
  children,
  className,
  position = "popper",
  ...props
}: SelectContentProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Portal>
      <Select.Content
        className={slots.content({ className })}
        data-slot="select-content"
        position={position}
        {...props}
      >
        <Select.ScrollUpButton className={slots.scrollButton()}>
          <ChevronUp className={slots.scrollButtonIcon()} />
        </Select.ScrollUpButton>
        <Select.Viewport
          className={slots.viewport({
            className,
            viewport: position === "popper" ? "popper" : undefined,
          })}
        >
          {children}
        </Select.Viewport>
        <Select.ScrollDownButton className={slots.scrollButton()}>
          <ChevronDown className={slots.scrollButtonIcon()} />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  );
}
