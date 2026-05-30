import "./checkbox.css";

import { Check } from "lucide-react";
import { Checkbox } from "radix-ui";
import { cn } from "tailwind-variants";

import { checkboxVariants } from "./checkbox.variants";

export type CheckboxProps = React.ComponentProps<typeof Checkbox.Root>;

export const CheckboxRoot = ({ className, ...props }: CheckboxProps) => {
  const { indicator, root } = checkboxVariants();

  return (
    <Checkbox.Root className={cn(root(), className)} {...props}>
      <Checkbox.Indicator className={indicator()}>
        <Check />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};
