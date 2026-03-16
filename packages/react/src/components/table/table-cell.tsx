import { cn } from "@adn-ui/core";

import { useTableContext } from "./table-context";

export type TableCellProps = React.ComponentProps<"td">;

export default function TableCell({ className, ...props }: TableCellProps) {
  const { slots } = useTableContext();

  return <td data-slot="table-cell" className={cn(slots.cell(), className)} {...props} />;
}
