import { cn } from "tailwind-variants";

import { useDrawerContext } from "./drawer-context";

export type DrawerFooterProps = React.ComponentProps<"div">;

export default function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  const { slots } = useDrawerContext();

  return <div data-slot="drawer-footer" className={cn(slots.footer(), className)} {...props} />;
}
