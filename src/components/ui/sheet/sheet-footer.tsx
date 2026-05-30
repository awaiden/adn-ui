import { cn } from "tailwind-variants";

import { useSheetContext } from "./sheet.context";

export type SheetFooterProps = React.ComponentProps<"div">;

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => {
  const { slots } = useSheetContext();
  return <div className={cn(slots.footer(), className)} {...props} />;
};
