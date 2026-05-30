import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableBodyProps = React.ComponentProps<"tbody">;

export const TableBody = ({ children, className, ...props }: TableBodyProps) => {
  const { slots } = useTableContext();
  return (
    <tbody className={cn(slots.body(), className)} {...props}>
      {children}
    </tbody>
  );
};
