import "./switch.css";

import { Switch } from "radix-ui";
import { cn } from "tailwind-variants";

import { switchVariants } from "./switch.variants";

export type SwitchProps = React.ComponentProps<typeof Switch.Root>;

export const SwitchRoot = ({ className, ...props }: SwitchProps) => {
  const { root, thumb } = switchVariants();

  return (
    <Switch.Root className={cn(root(), className)} {...props}>
      <Switch.Thumb className={thumb()} />
    </Switch.Root>
  );
};
