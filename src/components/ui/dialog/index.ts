import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogRoot } from "./dialog-root";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

export const Dialog = {
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
};

export { DialogContent, DialogDescription, DialogFooter, DialogRoot, DialogTitle, DialogTrigger };

export type { DialogContentProps } from "./dialog-content";

export type { DialogDescriptionProps } from "./dialog-description";

export type { DialogFooterProps } from "./dialog-footer";
export type { DialogRootProps } from "./dialog-root";
export type { DialogTitleProps } from "./dialog-title";
export type { DialogTriggerProps } from "./dialog-trigger";
export { DialogContext, useDialogContext } from "./dialog.context";
export { type DialogVariants, dialogVariants } from "./dialog.variants";
