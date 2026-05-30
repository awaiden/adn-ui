import { AlertDescription } from "./alert-description";
import { AlertRoot } from "./alert-root";
import { AlertTitle } from "./alert-title";

export const Alert = {
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
};

export { AlertDescription, AlertRoot, AlertTitle };

export { AlertContext, useAlertContext } from "./alert.context";

export { type AlertVariants, alertVariants } from "./alert.variants";
