"use client";

import "./tooltip.css";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type React from "react";
import { cn } from "tailwind-variants";

import { TooltipContext, useTooltipContext } from "./tooltip.context";
import { tooltipVariants, type TooltipVariants } from "./tooltip.variants";

export type TooltipProviderProps = React.ComponentProps<typeof BaseTooltip.Provider>;

export const TooltipProvider = (props: TooltipProviderProps) => {
  return <BaseTooltip.Provider {...props} />;
};

export type TooltipProps = TooltipVariants & React.ComponentProps<typeof BaseTooltip.Root>;

export const TooltipRoot = ({ children, variant, ...props }: TooltipProps) => {
  const slots = tooltipVariants({ variant });

  return (
    <TooltipContext.Provider value={{ slots }}>
      <BaseTooltip.Root {...props}>{children}</BaseTooltip.Root>
    </TooltipContext.Provider>
  );
};

export type TooltipTriggerProps = React.ComponentProps<typeof BaseTooltip.Trigger>;

export const TooltipTrigger = ({ className, ...props }: TooltipTriggerProps) => {
  const { slots } = useTooltipContext();
  return <BaseTooltip.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type TooltipPortalProps = React.ComponentProps<typeof BaseTooltip.Portal>;

export const TooltipPortal = (props: TooltipPortalProps) => {
  return <BaseTooltip.Portal {...props} />;
};

export type TooltipPositionerProps = React.ComponentProps<typeof BaseTooltip.Positioner>;

export const TooltipPositioner = ({
  className,
  sideOffset = 6,
  ...props
}: TooltipPositionerProps) => {
  const { slots } = useTooltipContext();
  return (
    <BaseTooltip.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type TooltipPopupProps = React.ComponentProps<typeof BaseTooltip.Popup>;

export const TooltipPopup = ({ className, ...props }: TooltipPopupProps) => {
  const { slots } = useTooltipContext();
  return <BaseTooltip.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type TooltipArrowProps = React.ComponentProps<typeof BaseTooltip.Arrow>;

export const TooltipArrow = ({ className, ...props }: TooltipArrowProps) => {
  const { slots } = useTooltipContext();
  return <BaseTooltip.Arrow className={cn(slots.arrow(), className)} {...props} />;
};

export type TooltipViewportProps = React.ComponentProps<typeof BaseTooltip.Viewport>;

export const TooltipViewport = ({ className, ...props }: TooltipViewportProps) => {
  const { slots } = useTooltipContext();
  return <BaseTooltip.Viewport className={cn(slots.viewport(), className)} {...props} />;
};
