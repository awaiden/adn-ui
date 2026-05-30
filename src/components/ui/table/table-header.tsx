import { cn } from "tailwind-variants";

import { useTableContext } from "./table.context";

export type TableHeaderProps = React.ComponentProps<"thead">;

export const TableHeader = ({ children, className, ...props }: TableHeaderProps) => {
  const { slots } = useTableContext();
  return (
    <thead className={cn(slots.header(), className)} {...props}>
      {children}
    </thead>
  );
};
