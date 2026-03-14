import { cn } from "tailwind-variants";

import { useDialogContext } from "./dialog-context";

export type DialogFooterProps = React.ComponentProps<"div">;

export default function DialogFooter({ className, ...props }: DialogFooterProps) {
  const { slots } = useDialogContext();

  return <div data-slot="dialog-footer" className={cn(slots.footer(), className)} {...props} />;
}
