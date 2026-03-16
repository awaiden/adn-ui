import { cn } from "@adn-ui/core";

import { useTableContext } from "./table-context";

export type TableBodyProps = React.ComponentProps<"tbody">;

export default function TableBody({ className, ...props }: TableBodyProps) {
  const { slots } = useTableContext();

  return <tbody data-slot="table-body" className={cn(slots.body(), className)} {...props} />;
}
