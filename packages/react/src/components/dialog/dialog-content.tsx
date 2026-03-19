import { cn } from "@adn-ui/core";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";

import { useDialogContext } from "./dialog-context";
import DialogOverlay from "./dialog-overlay";
import DialogPortal from "./dialog-portal";

export type DialogContentProps = React.ComponentProps<typeof Dialog.Content>;

export default function DialogContent({ children, className, ...props }: DialogContentProps) {
  const { slots } = useDialogContext();

  return (
    <DialogPortal>
      <DialogOverlay />
      <Dialog.Content
        data-slot="dialog-content"
        className={slots.content({ className })}
        {...props}
      >
        {children}
        <Dialog.Close className={slots.close()}>
          <X className={slots.closeIcon()} />
          <span className={slots.srOnly()}>Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </DialogPortal>
  );
}
