import "./scroll-area.css";

import { ScrollArea } from "radix-ui";
import { cn } from "tailwind-variants";

import { scrollAreaVariants } from "./scroll-area.variants";

export type ScrollAreaProps = React.ComponentProps<typeof ScrollArea.Root>;

export const ScrollAreaRoot = ({ children, className, ...props }: ScrollAreaProps) => {
  const { corner, root, scrollbar, thumb, viewport } = scrollAreaVariants();

  return (
    <ScrollArea.Root className={cn(root(), className)} {...props}>
      <ScrollArea.Viewport className={viewport()}>{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar className={scrollbar()} orientation="vertical">
        <ScrollArea.Thumb className={thumb()} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar className={scrollbar()} orientation="horizontal">
        <ScrollArea.Thumb className={thumb()} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={corner()} />
    </ScrollArea.Root>
  );
};
