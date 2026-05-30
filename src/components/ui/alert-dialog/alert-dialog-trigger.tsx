import { AlertDialog } from "radix-ui";

export type AlertDialogTriggerProps = React.ComponentProps<typeof AlertDialog.Trigger>;

export const AlertDialogTrigger = (props: AlertDialogTriggerProps) => {
  return <AlertDialog.Trigger asChild {...props} />;
};
