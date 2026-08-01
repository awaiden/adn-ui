"use client";

import "./preview-card.css";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type React from "react";
import { cn } from "tailwind-variants";

import { PreviewCardContext, usePreviewCardContext } from "./preview-card.context";
import { previewCardVariants, type PreviewCardVariants } from "./preview-card.variants";

export type PreviewCardProps = PreviewCardVariants &
  React.ComponentProps<typeof BasePreviewCard.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardRoot = ({ children, size, ...props }: PreviewCardProps) => {
  const slots = previewCardVariants({ size });

  return (
    <PreviewCardContext.Provider value={{ slots }}>
      <BasePreviewCard.Root {...props}>{children}</BasePreviewCard.Root>
    </PreviewCardContext.Provider>
  );
};

export type PreviewCardTriggerProps = React.ComponentProps<typeof BasePreviewCard.Trigger>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardTrigger = ({ className, ...props }: PreviewCardTriggerProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type PreviewCardPortalProps = React.ComponentProps<typeof BasePreviewCard.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardPortal = (props: PreviewCardPortalProps) => {
  return <BasePreviewCard.Portal {...props} />;
};

export type PreviewCardBackdropProps = React.ComponentProps<typeof BasePreviewCard.Backdrop>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardBackdrop = ({ className, ...props }: PreviewCardBackdropProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

export type PreviewCardPositionerProps = React.ComponentProps<typeof BasePreviewCard.Positioner>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
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

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardPopup = ({ className, ...props }: PreviewCardPopupProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type PreviewCardArrowProps = React.ComponentProps<typeof BasePreviewCard.Arrow>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCardArrow = ({ className, ...props }: PreviewCardArrowProps) => {
  const { slots } = usePreviewCardContext();
  return <BasePreviewCard.Arrow className={cn(slots.arrow(), className)} {...props} />;
};
