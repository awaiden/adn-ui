import { cn } from "@adn-ui/core";

import { useTableContext } from "./table-context";

export type TableCaptionProps = React.ComponentProps<"caption">;

export default function TableCaption({ className, ...props }: TableCaptionProps) {
  const { slots } = useTableContext();

  return (
    <caption data-slot="table-caption" className={cn(slots.caption(), className)} {...props} />
  );
}
