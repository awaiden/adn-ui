import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableCellProps = React.ComponentProps<"td">;

export const TableCell = ({ children, className, ...props }: TableCellProps) => {
  const { slots } = useTableContext();
  return (
    <td className={cn(slots.cell(), className)} {...props}>
      {children}
    </td>
  );
};
