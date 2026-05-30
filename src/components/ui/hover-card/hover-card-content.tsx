import { HoverCard } from "radix-ui";
import { cn } from "tailwind-variants";

import { hoverCardVariants } from "./hover-card.variants";

export type HoverCardContentProps = React.ComponentProps<typeof HoverCard.Content>;

export const HoverCardContent = ({
  className,
  sideOffset = 4,
  ...props
}: HoverCardContentProps) => {
  const { content } = hoverCardVariants();

  return (
    <HoverCard.Portal>
      <HoverCard.Content className={cn(content(), className)} sideOffset={sideOffset} {...props} />
    </HoverCard.Portal>
  );
};
