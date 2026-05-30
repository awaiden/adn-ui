import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDialogContext } from "./dialog.context";

export type DialogContentProps = React.ComponentProps<typeof Dialog.Content>;

export const DialogContent = ({ children, className, ...props }: DialogContentProps) => {
  const { slots } = useDialogContext();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={slots.overlay()} />
      <Dialog.Content className={cn(slots.content(), className)} {...props}>
        {children}
        <Dialog.Close className={slots.close()}>
          <X />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
