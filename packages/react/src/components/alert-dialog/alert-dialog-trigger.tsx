import { AlertDialog } from "radix-ui";

export type AlertDialogTriggerProps = React.ComponentProps<typeof AlertDialog.Trigger>;

export default function AlertDialogTrigger(props: AlertDialogTriggerProps) {
  return <AlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />;
}
