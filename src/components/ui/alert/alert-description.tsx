import { cn } from "tailwind-variants";

import { useAlertContext } from "./alert.context";

export type AlertDescriptionProps = React.ComponentProps<"div">;

export const AlertDescription = ({ children, className, ...props }: AlertDescriptionProps) => {
  const { slots } = useAlertContext();
  return (
    <div className={cn(slots.description(), className)} {...props}>
      {children}
    </div>
  );
};
