"use client";

import "./collapsible.css";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { ChevronRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { CollapsibleContext, useCollapsibleContext } from "./collapsible.context";
import { collapsibleVariants, type CollapsibleVariants } from "./collapsible.variants";

export type CollapsibleProps = CollapsibleVariants &
  React.ComponentProps<typeof BaseCollapsible.Root>;

export const CollapsibleRoot = ({ children, className, variant, ...props }: CollapsibleProps) => {
  const slots = collapsibleVariants({ variant });

  return (
    <CollapsibleContext.Provider value={{ slots }}>
      <BaseCollapsible.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseCollapsible.Root>
    </CollapsibleContext.Provider>
  );
};

export type CollapsibleTriggerProps = React.ComponentProps<typeof BaseCollapsible.Trigger> & {
  hideChevron?: boolean;
};

export const CollapsibleTrigger = ({
  children,
  className,
  hideChevron = false,
  ...props
}: CollapsibleTriggerProps) => {
  const { slots } = useCollapsibleContext();
  return (
    <BaseCollapsible.Trigger className={cn(slots.trigger(), className)} {...props}>
      {children}
      {!hideChevron && <ChevronRight />}
    </BaseCollapsible.Trigger>
  );
};

export type CollapsiblePanelProps = React.ComponentProps<typeof BaseCollapsible.Panel>;

export const CollapsiblePanel = ({ children, className, ...props }: CollapsiblePanelProps) => {
  const { slots } = useCollapsibleContext();
  return (
    <BaseCollapsible.Panel className={cn(slots.panel(), className)} {...props}>
      <div className="text-muted-foreground px-1 py-2">{children}</div>
    </BaseCollapsible.Panel>
  );
};
