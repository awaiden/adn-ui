import { cn } from "tailwind-variants";

import { useAlertContext } from "./alert.context";

export type AlertTitleProps = React.ComponentProps<"h5">;

export const AlertTitle = ({ children, className, ...props }: AlertTitleProps) => {
  const { slots } = useAlertContext();
  return (
    <h5 className={cn(slots.title(), className)} {...props}>
      {children}
    </h5>
  );
};
