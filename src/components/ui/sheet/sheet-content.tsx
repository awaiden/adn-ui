import "./sheet.css";

import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { SheetContext } from "./sheet.context";
import { sheetVariants, type SheetVariants } from "./sheet.variants";

export type SheetContentProps = React.ComponentProps<typeof Dialog.Content> & SheetVariants;

export const SheetContent = ({ children, className, side, ...props }: SheetContentProps) => {
  const slots = sheetVariants({ side });

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={slots.overlay()} />
      <SheetContext value={{ slots }}>
        <Dialog.Content className={cn(slots.content(), className)} {...props}>
          <Dialog.Close className={slots.close()}>
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </SheetContext>
    </Dialog.Portal>
  );
};
