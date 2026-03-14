import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select-context";

export type SelectSeparatorProps = React.ComponentProps<typeof Select.Separator>;

export default function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Separator
      data-slot="select-separator"
      className={cn(slots.separator(), className)}
      {...props}
    />
  );
}
