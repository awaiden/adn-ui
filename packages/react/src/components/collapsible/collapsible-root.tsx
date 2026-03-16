import { collapsibleVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";
import { Collapsible } from "radix-ui";

import { CollapsibleContext } from "./collapsible-context";

export type CollapsibleRootProps = React.ComponentProps<typeof Collapsible.Root>;

export default function CollapsibleRoot({ className, ...props }: CollapsibleRootProps) {
  const slots = collapsibleVariants();

  return (
    <CollapsibleContext value={{ slots }}>
      <Collapsible.Root
        data-slot="collapsible-root"
        className={cn(slots.root(), className)}
        {...props}
      />
    </CollapsibleContext>
  );
}
