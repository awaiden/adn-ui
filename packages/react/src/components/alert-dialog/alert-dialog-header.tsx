import { cn } from "@adn-ui/core";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogHeaderProps = React.ComponentProps<"div">;

export default function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps) {
  const { slots } = useAlertDialogContext();

  return (
    <div data-slot="alert-dialog-header" className={cn(slots.header(), className)} {...props} />
  );
}
