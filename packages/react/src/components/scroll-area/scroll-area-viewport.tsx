import { cn } from "@adn-ui/core";
import { ScrollArea } from "radix-ui";

import { useScrollAreaContext } from "./scroll-area-context";

export type ScrollAreaViewportProps = React.ComponentProps<typeof ScrollArea.Viewport>;

export default function ScrollAreaViewport({ className, ...props }: ScrollAreaViewportProps) {
  const { slots } = useScrollAreaContext();

  return (
    <ScrollArea.Viewport
      data-slot="scroll-area-viewport"
      className={cn(slots.viewport(), className)}
      {...props}
    />
  );
}
