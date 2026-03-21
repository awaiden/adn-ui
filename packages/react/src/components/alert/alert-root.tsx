import * as React from "react";
import { type AlertVariants, alertVariants, cn } from "@adn-ui/core";

import AlertContent from "./alert-content";
import { AlertContext } from "./alert-context";

export type AlertRootProps = React.ComponentProps<"div"> & AlertVariants;

const isAlertComponent = (child: any, displayName: string) => {
  return (
    React.isValidElement(child) &&
    (child.type as any)?.displayName === displayName
  );
};

export default function AlertRoot({ className, variant, children, ...props }: AlertRootProps) {
  const slots = alertVariants({ variant });

  const childrenArray = React.Children.toArray(children);

  // Find explicit AlertIcon
  const iconIndex = childrenArray.findIndex((child) => isAlertComponent(child, "AlertIcon"));

  let icon: React.ReactNode = null;
  let content: React.ReactNode[] = [];

  if (iconIndex !== -1) {
    icon = childrenArray[iconIndex];
    content = childrenArray.filter((_, i) => i !== iconIndex);
  } else {
    // Check if first child is a raw icon (not an alert title/description/content)
    const firstChild = childrenArray[0];
    if (
      React.isValidElement(firstChild) &&
      !isAlertComponent(firstChild, "AlertTitle") &&
      !isAlertComponent(firstChild, "AlertDescription") &&
      !isAlertComponent(firstChild, "AlertContent")
    ) {
      icon = (
        <div data-slot="alert-icon" className={slots.icon()}>
          {firstChild}
        </div>
      );
      content = childrenArray.slice(1);
    } else {
      content = childrenArray;
    }
  }

  return (
    <AlertContext value={{ slots }}>
      <div data-slot="alert" role="alert" className={cn(slots.root(), className)} {...props}>
        {icon}
        <AlertContent>{content}</AlertContent>
      </div>
    </AlertContext>
  );
}
