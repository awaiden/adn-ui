import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSheetContext } from "./sheet.context";

export type SheetDescriptionProps = React.ComponentProps<typeof Dialog.Description>;

export const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  const { slots } = useSheetContext();
  return <Dialog.Description className={cn(slots.description(), className)} {...props} />;
};
