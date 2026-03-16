import { tableVariants, cn } from "@adn-ui/core";

import { TableContext } from "./table-context";

export type TableRootProps = React.ComponentProps<"table">;

export default function TableRoot({ className, ...props }: TableRootProps) {
  const slots = tableVariants();

  return (
    <TableContext value={{ slots }}>
      <div className="table__wrapper">
        <table data-slot="table-root" className={cn(slots.root(), className)} {...props} />
      </div>
    </TableContext>
  );
}
