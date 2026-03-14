import { cn } from "tailwind-variants";

import { useTableContext } from "./table-context";

export type TableFooterProps = React.ComponentProps<"tfoot">;

export default function TableFooter({ className, ...props }: TableFooterProps) {
  const { slots } = useTableContext();

  return <tfoot data-slot="table-footer" className={cn(slots.footer(), className)} {...props} />;
}
