import { cn } from "@adn-ui/core";
import { AlertDialog } from "radix-ui";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogDescriptionProps = React.ComponentProps<typeof AlertDialog.Description>;

export default function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  const { slots } = useAlertDialogContext();

  return (
    <AlertDialog.Description
      data-slot="alert-dialog-description"
      className={cn(slots.description(), className)}
      {...props}
    />
  );
}
