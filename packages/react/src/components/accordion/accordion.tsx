"use client";

import { Accordion as BaseAccordion } from "@base-ui/react";
import { LucideChevronDown } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AccordionContext } from "./accordion.context";
import { type AccordionVariants, accordionVariants } from "./accordion.variants";
import { useAccordion } from "./use-accordion";

// Root
export interface AccordionProps extends AccordionVariants, BaseAccordion.Root.Props {}

export const AccordionRoot = ({ className, ...props }: AccordionProps) => {
  const slots = useMemo(() => accordionVariants({}), []);

  return (
    <AccordionContext.Provider value={{ slots }}>
      <BaseAccordion.Root className={cn(className, slots.root())} {...props} />
    </AccordionContext.Provider>
  );
};

// Item
export interface AccordionItemProps extends BaseAccordion.Item.Props {}

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  const { slots } = useAccordion();
  return <BaseAccordion.Item className={cn(className, slots.item())} {...props} />;
};

// Header
export interface AccordionHeaderProps extends BaseAccordion.Header.Props {}

export const AccordionHeader = ({ className, ...props }: AccordionHeaderProps) => {
  const { slots } = useAccordion();
  return <BaseAccordion.Header className={cn(className, slots.header())} {...props} />;
};

// Trigger
export interface AccordionTriggerProps extends BaseAccordion.Trigger.Props {}

export const AccordionTrigger = ({ className, ...props }: AccordionTriggerProps) => {
  const { slots } = useAccordion();
  return <BaseAccordion.Trigger className={cn(className, slots.trigger())} {...props} />;
};

// Trigger Icon
export interface AccordionTriggerIconProps extends React.ComponentProps<"svg"> {}

export const AccordionTriggerIcon = ({ className, ...props }: AccordionTriggerIconProps) => {
  const { slots } = useAccordion();
  return <LucideChevronDown className={cn(className, slots.triggerIcon())} {...props} />;
};

// Panel
export interface AccordionPanelProps extends BaseAccordion.Panel.Props {}

export const AccordionPanel = ({ className, ...props }: AccordionPanelProps) => {
  const { slots } = useAccordion();
  return <BaseAccordion.Panel className={cn(className, slots.panel())} {...props} />;
};

// Content
export interface AccordionContentProps extends React.ComponentProps<"div"> {}
export const AccordionContent = ({ className, ...props }: AccordionContentProps) => {
  const { slots } = useAccordion();
  return <div className={cn(className, slots.content())} {...props} />;
};

// Exports
