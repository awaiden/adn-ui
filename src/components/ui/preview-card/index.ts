import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";

import {
  PreviewCardArrow,
  PreviewCardBackdrop,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from "./preview-card";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/preview-card/content.md
 */
export const PreviewCard = {
  Arrow: PreviewCardArrow,
  Backdrop: PreviewCardBackdrop,
  Popup: PreviewCardPopup,
  Portal: PreviewCardPortal,
  Positioner: PreviewCardPositioner,
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  createHandle: BasePreviewCard.createHandle,
};

export {
  PreviewCardArrow,
  PreviewCardBackdrop,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
};

export type {
  PreviewCardArrowProps,
  PreviewCardBackdropProps,
  PreviewCardPopupProps,
  PreviewCardPortalProps,
  PreviewCardPositionerProps,
  PreviewCardProps,
  PreviewCardTriggerProps,
} from "./preview-card";
export { PreviewCardContext, usePreviewCardContext } from "./preview-card.context";
export { type PreviewCardVariants, previewCardVariants } from "./preview-card.variants";
