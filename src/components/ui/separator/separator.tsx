import "./separator.css";

import { Separator } from "radix-ui";
import { cn } from "tailwind-variants";

import { separatorVariants } from "./separator.variants";

export type SeparatorProps = React.ComponentProps<typeof Separator.Root>;

export const SeparatorRoot = ({ className, ...props }: SeparatorProps) => {
  const { root } = separatorVariants();

  return <Separator.Root className={cn(root(), className)} {...props} />;
};
