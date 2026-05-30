import "./alert.css";

import { cn } from "tailwind-variants";

import { AlertContext } from "./alert.context";
import { alertVariants, type AlertVariants } from "./alert.variants";

export type AlertRootProps = AlertVariants & React.ComponentProps<"div">;

export const AlertRoot = ({ children, className, variant, ...props }: AlertRootProps) => {
  const slots = alertVariants({ variant });

  return (
    <AlertContext value={{ slots }}>
      <div className={cn(slots.root(), className)} role="alert" {...props}>
        {children}
      </div>
    </AlertContext>
  );
};
