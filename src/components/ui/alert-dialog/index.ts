import { AlertDialogAction } from "./alert-dialog-action";
import { AlertDialogCancel } from "./alert-dialog-cancel";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogRoot } from "./alert-dialog-root";
import { AlertDialogTitle } from "./alert-dialog-title";
import { AlertDialogTrigger } from "./alert-dialog-trigger";

export const AlertDialog = {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
};

export {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
};

export { AlertDialogContext, useAlertDialogContext } from "./alert-dialog.context";

export { type AlertDialogVariants, alertDialogVariants } from "./alert-dialog.variants";
