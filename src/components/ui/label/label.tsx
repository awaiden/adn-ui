import "./label.css";

import { Label } from "radix-ui";
import { cn } from "tailwind-variants";

import { labelVariants } from "./label.variants";

export type LabelProps = React.ComponentProps<typeof Label.Root>;

export const LabelRoot = ({ className, ...props }: LabelProps) => {
  const { root } = labelVariants();

  return <Label.Root className={cn(root(), className)} {...props} />;
};
