"use client";

import { PreviewCard as BasePreviewCard } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { PreviewCardContext } from "./preview-card.context";
import { type PreviewCardVariants, previewCardVariants } from "./preview-card.variants";
import { usePreviewCard } from "./use-preview-card";

// Root
export interface PreviewCardProps extends PreviewCardVariants, BasePreviewCard.Root.Props {}

export const PreviewCardRoot = ({ ...props }: PreviewCardProps) => {
  const slots = useMemo(() => previewCardVariants(), []);

  return (
    <PreviewCardContext value={{ slots }}>
      <BasePreviewCard.Root {...props} />
    </PreviewCardContext>
  );
};

// Trigger
export interface PreviewCardTriggerProps extends BasePreviewCard.Trigger.Props {}

export const PreviewCardTrigger = ({ className, ...props }: PreviewCardTriggerProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

// Portal
export interface PreviewCardPortalProps extends BasePreviewCard.Portal.Props {}

export const PreviewCardPortal = ({ className, ...props }: PreviewCardPortalProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Portal className={cn(slots.portal(), className)} {...props} />;
};

// Backdrop
export interface PreviewCardBackdropProps extends BasePreviewCard.Backdrop.Props {}

export const PreviewCardBackdrop = ({ className, ...props }: PreviewCardBackdropProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

// Positioner
export interface PreviewCardPositionerProps extends BasePreviewCard.Positioner.Props {}

export const PreviewCardPositioner = ({ className, ...props }: PreviewCardPositionerProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Positioner className={cn(slots.positioner(), className)} {...props} />;
};

// Popup
export interface PreviewCardPopupProps extends BasePreviewCard.Popup.Props {}

export const PreviewCardPopup = ({ className, ...props }: PreviewCardPopupProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Popup className={cn(slots.popup(), className)} {...props} />;
};

// Arrow
export interface PreviewCardArrowProps extends BasePreviewCard.Arrow.Props {}

export const PreviewCardArrow = ({ className, ...props }: PreviewCardArrowProps) => {
  const { slots } = usePreviewCard();

  return <BasePreviewCard.Arrow className={cn(slots.arrow(), className)} {...props} />;
};
