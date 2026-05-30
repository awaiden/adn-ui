import "./collapsible.css";

import { Collapsible } from "radix-ui";
import { cn } from "tailwind-variants";

import { collapsibleVariants } from "./collapsible.variants";

export type CollapsibleRootProps = React.ComponentProps<typeof Collapsible.Root>;

export const CollapsibleRoot = ({ className, ...props }: CollapsibleRootProps) => {
  const { root } = collapsibleVariants();

  return <Collapsible.Root className={cn(root(), className)} {...props} />;
};
