import { buttonVariants } from "@adn-ui/core";
import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

export type AlertDialogActionProps = React.ComponentProps<typeof AlertDialog.Action>;

export default function AlertDialogAction({ className, ...props }: AlertDialogActionProps) {
  return (
    <AlertDialog.Action
      data-slot="alert-dialog-action"
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}
