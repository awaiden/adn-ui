import * as React from "react";

import { useAlertContext } from "./alert-context";

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AlertIcon({ className, children, ...props }: AlertIconProps) {
  const { slots } = useAlertContext();

  return (
    <div className={slots.icon({ className })} {...props}>
      {children}
    </div>
  );
}
