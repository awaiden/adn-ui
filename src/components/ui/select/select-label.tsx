import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select.context";

export type SelectLabelProps = React.ComponentProps<typeof Select.Label>;

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
  const { slots } = useSelectContext();

  return <Select.Label className={cn(slots.label(), className)} {...props} />;
};
