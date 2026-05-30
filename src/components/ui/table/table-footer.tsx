import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableFooterProps = React.ComponentProps<"tfoot">;

export const TableFooter = ({ children, className, ...props }: TableFooterProps) => {
  const { slots } = useTableContext();
  return (
    <tfoot className={cn(slots.footer(), className)} {...props}>
      {children}
    </tfoot>
  );
};
