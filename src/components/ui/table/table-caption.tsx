import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableCaptionProps = React.ComponentProps<"caption">;

export const TableCaption = ({ children, className, ...props }: TableCaptionProps) => {
  const { slots } = useTableContext();
  return (
    <caption className={cn(slots.caption(), className)} {...props}>
      {children}
    </caption>
  );
};
