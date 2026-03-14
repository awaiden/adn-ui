import { cn } from "tailwind-variants";

import { useTableContext } from "./table-context";

export type TableCellProps = React.ComponentProps<"td">;

export default function TableCell({ className, ...props }: TableCellProps) {
  const { slots } = useTableContext();

  return <td data-slot="table-cell" className={cn(slots.cell(), className)} {...props} />;
}
