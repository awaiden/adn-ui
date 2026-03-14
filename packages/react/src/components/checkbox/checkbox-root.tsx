import { type CheckboxVariants, checkboxVariants } from "@adn-ui/core";
import { Checkbox } from "radix-ui";

import { CheckboxContext } from "./checkbox-context";

export type CheckboxRootProps = React.ComponentProps<typeof Checkbox.Root> & CheckboxVariants;

export default function CheckboxRoot({ className, size, ...props }: CheckboxRootProps) {
  const slots = checkboxVariants({ size });

  return (
    <CheckboxContext value={{ slots }}>
      <Checkbox.Root className={slots.root({ className })} {...props} />
    </CheckboxContext>
  );
}
