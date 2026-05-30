import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableHeadProps = React.ComponentProps<"th">;

export const TableHead = ({ children, className, ...props }: TableHeadProps) => {
  const { slots } = useTableContext();
  return (
    <th className={cn(slots.head(), className)} {...props}>
      {children}
    </th>
  );
};
