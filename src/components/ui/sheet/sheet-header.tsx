import { cn } from "tailwind-variants";

import { useSheetContext } from "./sheet.context";

export type SheetHeaderProps = React.ComponentProps<"div">;

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => {
  const { slots } = useSheetContext();
  return <div className={cn(slots.header(), className)} {...props} />;
};
