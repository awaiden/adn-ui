import { Collapsible } from "radix-ui";
import { cn } from "tailwind-variants";

import { collapsibleVariants } from "./collapsible.variants";

export type CollapsibleContentProps = React.ComponentProps<typeof Collapsible.Content>;

export const CollapsibleContent = ({ className, ...props }: CollapsibleContentProps) => {
  const { content } = collapsibleVariants();

  return <Collapsible.Content className={cn(content(), className)} {...props} />;
};
