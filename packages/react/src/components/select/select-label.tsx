import { cn } from "@adn-ui/core";
import { Select } from "radix-ui";

import { useSelectContext } from "./select-context";

export type SelectLabelProps = React.ComponentProps<typeof Select.Label>;

export default function SelectLabel({ className, ...props }: SelectLabelProps) {
  const { slots } = useSelectContext();

  return (
    <Select.Label data-slot="select-label" className={cn(slots.label(), className)} {...props} />
  );
}
