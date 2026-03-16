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
        className={cn(slots.content(), className)}
        {...props}
      >
        {children}
        <Dialog.Close data-slot="dialog-close" className={slots.close()}>
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </DialogPortal>
  );
}
