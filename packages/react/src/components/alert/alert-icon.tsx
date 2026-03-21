import * as React from "react";

import { useAlertContext } from "./alert-context";

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AlertIcon({ className, children, ...props }: AlertIconProps) {
  const { slots } = useAlertContext();

  return (
    <div data-slot="alert-icon" className={slots.icon({ className })} {...props}>
      {children}
    </div>
  );
}
AlertIcon.displayName = "AlertIcon";
