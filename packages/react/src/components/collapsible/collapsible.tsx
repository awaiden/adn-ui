import { Collapsible as BaseCollapsible } from "@base-ui/react";
import { LucideChevronRight } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { CollapsibleContext } from "./collapsible.context";
import { type CollapsibleVariants, collapsibleVariants } from "./collapsible.variants";
import { useCollapsible } from "./use-collapsible";

// Root
export interface CollapsibleProps extends CollapsibleVariants, BaseCollapsible.Root.Props {}

export const CollapsibleRoot = ({ className, ...props }: CollapsibleProps) => {
  const slots = useMemo(() => collapsibleVariants({}), []);

  return (
    <CollapsibleContext value={{ slots }}>
      <BaseCollapsible.Root
        className={cn(className, slots.root())}
        {...props}
      />
    </CollapsibleContext>
  );
};

// Trigger
export interface CollapsibleTriggerProps extends BaseCollapsible.Trigger.Props {}
export const CollapsibleTrigger = ({ className, children, ...props }: CollapsibleTriggerProps) => {
  const { slots } = useCollapsible();
  return (
    <BaseCollapsible.Trigger
      className={cn(className, slots.trigger())}
      {...props}
    >
      {children}
    </BaseCollapsible.Trigger>
  );
};

// Trigger Icon
export interface CollapsibleTriggerIconProps extends React.ComponentProps<"svg"> {}
export const CollapsibleTriggerIcon = ({ className, ...props }: CollapsibleTriggerIconProps) => {
  const { slots } = useCollapsible();
  return (
    <LucideChevronRight
      className={cn(className, slots.triggerIcon())}
      {...props}
    />
  );
};

// Panel
export interface CollapsiblePanelProps extends BaseCollapsible.Panel.Props {}
export const CollapsiblePanel = ({ className, children, ...props }: CollapsiblePanelProps) => {
  const { slots } = useCollapsible();
  return (
    <BaseCollapsible.Panel
      className={cn(className, slots.panel())}
      {...props}
    >
      {children}
    </BaseCollapsible.Panel>
  );
};

// Content
export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CollapsibleContent = ({ className, ...props }: CollapsibleContentProps) => {
  const { slots } = useCollapsible();
  return (
    <div
      className={cn(className, slots.content())}
      {...props}
    />
  );
};
