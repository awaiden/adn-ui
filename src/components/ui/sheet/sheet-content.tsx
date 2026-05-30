import "./sheet.css";

import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { SheetContext } from "./sheet.context";
import { sheetVariants, type SheetVariants } from "./sheet.variants";

export type SheetContentProps = React.ComponentProps<typeof Dialog.Content> & SheetVariants;

export const SheetContent = ({
  children,
  className,
  side = "right",
  ...props
}: SheetContentProps) => {
  const slots = sheetVariants({ side });
  const isVertical = side === "top" || side === "bottom";

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={slots.overlay()} />
      <SheetContext value={{ slots }}>
        <Dialog.Content className={cn(slots.content(), className)} {...props}>
          {isVertical && side === "bottom" && <div className={slots.handle()} />}
          <Dialog.Close className={slots.close()}>
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          {children}
          {isVertical && side === "top" && <div className={slots.handle()} />}
        </Dialog.Content>
      </SheetContext>
    </Dialog.Portal>
  );
};
