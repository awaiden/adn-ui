import { cn } from "@adn-ui/core";
import { RadioGroup } from "radix-ui";

import { useRadioGroupContext } from "./radio-group-context";

export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroup.Item>;

export default function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  const { slots } = useRadioGroupContext();

  return (
    <RadioGroup.Item
      data-slot="radio-group-item"
      className={cn(slots.item(), className)}
      {...props}
    />
  );
}
