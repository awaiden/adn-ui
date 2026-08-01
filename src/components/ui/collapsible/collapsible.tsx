"use client";

import "./collapsible.css";

import type React from "react";

import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { cn } from "tailwind-variants";

import { CollapsibleContext, useCollapsibleContext } from "./collapsible.context";
import { collapsibleVariants, type CollapsibleVariants } from "./collapsible.variants";

export type CollapsibleProps = CollapsibleVariants &
  React.ComponentProps<typeof BaseCollapsible.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/collapsible/content.md
 */
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

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/collapsible/content.md
 */
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
      {!hideChevron && (
        <svg
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-150 group-data-panel-open:rotate-90"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </BaseCollapsible.Trigger>
  );
};

export type CollapsiblePanelProps = React.ComponentProps<typeof BaseCollapsible.Panel>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/collapsible/content.md
 */
export const CollapsiblePanel = ({ children, className, ...props }: CollapsiblePanelProps) => {
  const { slots } = useCollapsibleContext();
  return (
    <BaseCollapsible.Panel className={cn(slots.panel(), className)} {...props}>
      <div className="py-2 px-1 text-muted-foreground">{children}</div>
    </BaseCollapsible.Panel>
  );
};
