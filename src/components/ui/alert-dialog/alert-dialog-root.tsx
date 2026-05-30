import "./alert-dialog.css";

import { AlertDialog } from "radix-ui";

import { AlertDialogContext } from "./alert-dialog.context";
import { alertDialogVariants } from "./alert-dialog.variants";

export type AlertDialogRootProps = React.ComponentProps<typeof AlertDialog.Root>;

export const AlertDialogRoot = (props: AlertDialogRootProps) => {
  const slots = alertDialogVariants();

  return (
    <AlertDialogContext value={{ slots }}>
      <AlertDialog.Root {...props} />
    </AlertDialogContext>
  );
};
