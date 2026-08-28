"use client";

import "./accordion.css";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { AccordionContext, useAccordionContext } from "./accordion.context";
import { accordionVariants, type AccordionVariants } from "./accordion.variants";

export type AccordionProps = AccordionVariants & React.ComponentProps<typeof BaseAccordion.Root>;

export const AccordionRoot = ({ children, className, variant, ...props }: AccordionProps) => {
  const slots = accordionVariants({ variant });

  return (
    <AccordionContext.Provider value={{ slots }}>
      <BaseAccordion.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseAccordion.Root>
    </AccordionContext.Provider>
  );
};

export type AccordionItemProps = React.ComponentProps<typeof BaseAccordion.Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  const { slots } = useAccordionContext();
  return <BaseAccordion.Item className={cn(slots.item(), className)} {...props} />;
};

export type AccordionHeaderProps = React.ComponentProps<typeof BaseAccordion.Header>;

export const AccordionHeader = ({ className, ...props }: AccordionHeaderProps) => {
  const { slots } = useAccordionContext();
  return <BaseAccordion.Header className={cn(slots.header(), className)} {...props} />;
};

export type AccordionTriggerProps = React.ComponentProps<typeof BaseAccordion.Trigger> & {
  hideChevron?: boolean;
};

export const AccordionTrigger = ({
  children,
  className,
  hideChevron = false,
  ...props
}: AccordionTriggerProps) => {
  const { slots } = useAccordionContext();
  return (
    <BaseAccordion.Trigger className={cn(slots.trigger(), className)} {...props}>
      {children}
      {!hideChevron && <ChevronDown />}
    </BaseAccordion.Trigger>
  );
};

export type AccordionPanelProps = React.ComponentProps<typeof BaseAccordion.Panel>;

export const AccordionPanel = ({ children, className, ...props }: AccordionPanelProps) => {
  const { slots } = useAccordionContext();
  return (
    <BaseAccordion.Panel className={cn(slots.panel(), className)} {...props}>
      <div className="text-muted-foreground px-4 py-3">{children}</div>
    </BaseAccordion.Panel>
  );
};
