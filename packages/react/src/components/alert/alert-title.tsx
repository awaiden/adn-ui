import { cn } from "@adn-ui/core";

import { useAlertContext } from "./alert-context";

export type AlertTitleProps = React.ComponentProps<"h5">;

export default function AlertTitle({ className, ...props }: AlertTitleProps) {
  const { slots } = useAlertContext();

  return <h5 data-slot="alert-title" className={cn(slots.title(), className)} {...props} />;
}
