import {
  PreviewCardArrow,
  PreviewCardBackdrop,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from "./preview-card";

export const PreviewCard = Object.assign(PreviewCardRoot, {
  Arrow: PreviewCardArrow,
  Backdrop: PreviewCardBackdrop,
  Popup: PreviewCardPopup,
  Portal: PreviewCardPortal,
  Positioner: PreviewCardPositioner,
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
});

export * from "./preview-card";

export type { PreviewCardVariants } from "./preview-card.variants";
export { previewCardVariants } from "./preview-card.variants";
