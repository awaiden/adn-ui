"use client";

import "./preview-card.css";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type React from "react";
import { cn } from "@/lib/cn";

import { PreviewCardContext, usePreviewCardContext } from "./preview-card.context";
import { previewCardVariants, type PreviewCardVariants } from "./preview-card.variants";

export type PreviewCardProps = PreviewCardVariants &
  React.ComponentProps<typeof BasePreviewCard.Root>;

export const PreviewCardRoot = ({ children, size, ...props }: PreviewCardProps) => {
  const slots = previewCardVariants({ size });

  return (
    <PreviewCardContext.Provider value={{ slots }}>
      <BasePreviewCard.Root {...props}>{children}</BasePreviewCard.Root>
    </PreviewCardContext.Provider>
  );
};

export type PreviewCardTriggerProps = React.ComponentProps<typeof BasePreviewCard.Trigger>;

export const PreviewCardTrigger = ({ className, ...props }: PreviewCardTriggerProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type PreviewCardPortalProps = React.ComponentProps<typeof BasePreviewCard.Portal>;

export const PreviewCardPortal = (props: PreviewCardPortalProps) => {
  return <BasePreviewCard.Portal {...props} />;
};

export type PreviewCardBackdropProps = React.ComponentProps<typeof BasePreviewCard.Backdrop>;

export const PreviewCardBackdrop = ({ className, ...props }: PreviewCardBackdropProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

export type PreviewCardPositionerProps = React.ComponentProps<typeof BasePreviewCard.Positioner>;

export const PreviewCardPositioner = ({
  className,
  sideOffset = 8,
  ...props
}: PreviewCardPositionerProps) => {
  const { slots } = usePreviewCardContext();
  return (
    <BasePreviewCard.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type PreviewCardPopupProps = React.ComponentProps<typeof BasePreviewCard.Popup>;

export const PreviewCardPopup = ({ className, ...props }: PreviewCardPopupProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type PreviewCardArrowProps = React.ComponentProps<typeof BasePreviewCard.Arrow>;

export const PreviewCardArrow = ({ className, ...props }: PreviewCardArrowProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Arrow className={cn(slots.arrow(), className)} {...props} />;
};
