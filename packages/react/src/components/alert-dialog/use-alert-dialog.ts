import { useContext } from "react";

import { AlertDialogContext } from "./alert-dialog.context";

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);

  if (!context) {
    throw new Error("useAlertDialog must be used within a AlertDialogProvider");
  }

  return context;
};
