import { cn } from "@adn-ui/core";
import { ScrollArea } from "radix-ui";

import { useScrollAreaContext } from "./scroll-area-context";

export type ScrollAreaScrollbarProps = React.ComponentProps<typeof ScrollArea.Scrollbar>;

export default function ScrollAreaScrollbar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaScrollbarProps) {
  const { slots } = useScrollAreaContext();

  return (
    <ScrollArea.Scrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(slots.scrollbar(), className)}
      {...props}
    />
  );
}
