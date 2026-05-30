import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSheetContext } from "./sheet.context";

export type SheetTitleProps = React.ComponentProps<typeof Dialog.Title>;

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  const { slots } = useSheetContext();
  return <Dialog.Title className={cn(slots.title(), className)} {...props} />;
};
