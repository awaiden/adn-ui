import { Circle } from "lucide-react";
import { RadioGroup } from "radix-ui";
import { cn } from "tailwind-variants";

import { useRadioGroupContext } from "./radio-group.context";

export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroup.Item>;

export const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
  const { slots } = useRadioGroupContext();

  return (
    <RadioGroup.Item className={cn(slots.item(), className)} {...props}>
      <RadioGroup.Indicator className={slots.indicator()}>
        <Circle />
      </RadioGroup.Indicator>
    </RadioGroup.Item>
  );
};
