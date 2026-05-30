import "./toggle.css";

import { Toggle } from "radix-ui";
import { cn } from "tailwind-variants";

import { toggleVariants, type ToggleVariants } from "./toggle.variants";

export type ToggleProps = React.ComponentProps<typeof Toggle.Root> & ToggleVariants;

export const ToggleRoot = ({ className, size, variant, ...props }: ToggleProps) => {
  const { root } = toggleVariants({ size, variant });

  return <Toggle.Root className={cn(root(), className)} {...props} />;
};
