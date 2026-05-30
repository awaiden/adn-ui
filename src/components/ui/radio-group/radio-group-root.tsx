import "./radio-group.css";

import { RadioGroup } from "radix-ui";
import { cn } from "tailwind-variants";

import { RadioGroupContext } from "./radio-group.context";
import { radioGroupVariants } from "./radio-group.variants";

export type RadioGroupRootProps = React.ComponentProps<typeof RadioGroup.Root>;

export const RadioGroupRoot = ({ className, ...props }: RadioGroupRootProps) => {
  const slots = radioGroupVariants();

  return (
    <RadioGroupContext value={{ slots }}>
      <RadioGroup.Root className={cn(slots.root(), className)} {...props} />
    </RadioGroupContext>
  );
};
