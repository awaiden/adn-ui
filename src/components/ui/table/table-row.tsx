import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableRowProps = React.ComponentProps<"tr">;

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
  const { slots } = useTableContext();
  return (
    <tr className={cn(slots.row(), className)} {...props}>
      {children}
    </tr>
  );
};
