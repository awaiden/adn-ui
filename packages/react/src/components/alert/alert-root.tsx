import { type AlertVariants, alertVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";

import { AlertContext } from "./alert-context";

export type AlertRootProps = React.ComponentProps<"div"> & AlertVariants;

export default function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  const slots = alertVariants({ variant });

  return (
    <AlertContext value={{ slots }}>
      <div data-slot="alert" role="alert" className={cn(slots.root(), className)} {...props} />
    </AlertContext>
  );
}
