import "./table.css";

import { cn } from "tailwind-variants";

import { TableContext } from "./table.context";
import { tableVariants, type TableVariants } from "./table.variants";

export type TableProps = React.ComponentProps<"table"> & TableVariants;

export const TableRoot = ({ children, className, ...props }: TableProps) => {
  const slots = tableVariants();

  return (
    <TableContext value={{ slots }}>
      <div className="relative w-full overflow-auto">
        <table className={cn(slots.root(), className)} {...props}>
          {children}
        </table>
      </div>
    </TableContext>
  );
};
