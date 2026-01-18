"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { TooltipContext } from "./tooltip.context";
import { type TooltipVariants, tooltipVariants } from "./tooltip.variants";
import { useTooltip } from "./use-tooltip";

// Root
export interface TooltipProps extends TooltipVariants, BaseTooltip.Root.Props {}

export const TooltipRoot = ({ ...props }: TooltipProps) => {
  const slots = useMemo(() => tooltipVariants({}), []);

  return (
    <TooltipContext value={{ slots }}>
      <BaseTooltip.Root {...props} />
    </TooltipContext>
  );
};

// Trigger
export interface TooltipTriggerProps extends BaseTooltip.Trigger.Props {}
export const TooltipTrigger = ({ className, ...props }: TooltipTriggerProps) => {
  const { slots } = useTooltip();

  return <BaseTooltip.Trigger className={cn(className, slots.trigger())} {...props} />;
};

// Portal
export interface TooltipPortalProps extends BaseTooltip.Portal.Props {}
export const TooltipPortal = ({ className, ...props }: TooltipPortalProps) => {
  const { slots } = useTooltip();

  return <BaseTooltip.Portal className={cn(className, slots.portal())} {...props} />;
};

// Positioner
export interface TooltipPositionerProps extends BaseTooltip.Positioner.Props {}
export const TooltipPositioner = ({ className, ...props }: TooltipPositionerProps) => {
  const { slots } = useTooltip();

  return <BaseTooltip.Positioner className={cn(className, slots.positioner())} {...props} />;
};

// Popup
export interface TooltipPopupProps extends BaseTooltip.Popup.Props {}
export const TooltipPopup = ({ className, ...props }: TooltipPopupProps) => {
  const { slots } = useTooltip();

  return <BaseTooltip.Popup className={cn(className, slots.popup())} {...props} />;
};

// Arrow
export interface TooltipArrowProps extends BaseTooltip.Arrow.Props {}
export const TooltipArrow = ({ className, ...props }: TooltipArrowProps) => {
  const { slots } = useTooltip();

  return <BaseTooltip.Arrow className={cn(className, slots.arrow())} {...props} />;
};

// Title
export interface TooltipTitleProps extends React.ComponentProps<"h4"> {}

export const TooltipTitle = ({ className, ...props }: TooltipTitleProps) => {
  const { slots } = useTooltip();

  return <h4 className={cn(className, slots.title())} {...props} />;
};

// Description
export interface TooltipDescriptionProps extends React.ComponentProps<"p"> {}

export const TooltipDescription = ({ className, ...props }: TooltipDescriptionProps) => {
  const { slots } = useTooltip();

  return <p className={cn(className, slots.description())} {...props} />;
};
