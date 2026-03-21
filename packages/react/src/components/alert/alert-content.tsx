import { cn } from "@adn-ui/core";

import { useAlertContext } from "./alert-context";

export type AlertContentProps = React.ComponentProps<"div">;

export default function AlertContent({ className, ...props }: AlertContentProps) {
  const { slots } = useAlertContext();

  return <div data-slot="alert-content" className={cn(slots.content(), className)} {...props} />;
}
AlertContent.displayName = "AlertContent";
