import { cn } from "@adn-ui/core";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogFooterProps = React.ComponentProps<"div">;

export default function AlertDialogFooter({ className, ...props }: AlertDialogFooterProps) {
  const { slots } = useAlertDialogContext();

  return (
    <div data-slot="alert-dialog-footer" className={cn(slots.footer(), className)} {...props} />
  );
}
