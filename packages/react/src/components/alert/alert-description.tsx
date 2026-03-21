import { cn } from "@adn-ui/core";

import { useAlertContext } from "./alert-context";

export type AlertDescriptionProps = React.ComponentProps<"div">;

export default function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const { slots } = useAlertContext();

  return (
    <div data-slot="alert-description" className={cn(slots.description(), className)} {...props} />
  );
}
AlertDescription.displayName = "AlertDescription";
