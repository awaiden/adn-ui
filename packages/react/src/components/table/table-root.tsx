import { tableVariants, type TableVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";

import { TableContext } from "./table-context";

export type TableRootProps = React.HTMLAttributes<HTMLTableElement> & TableVariants;

export default function TableRoot({ className, ...props }: TableRootProps) {
  const slots = tableVariants();

  return (
    <TableContext value={{ slots }}>
      <div data-slot="table-wrapper" className={slots.wrapper()}>
        <table data-slot="table" className={cn(slots.root(), className)} {...props} />
      </div>
    </TableContext>
  );
}
