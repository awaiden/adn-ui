import { useContext } from "react";

import { PreviewCardContext } from "./preview-card.context";

export const usePreviewCard = () => {
  const context = useContext(PreviewCardContext);

  if (!context) {
    throw new Error("usePreviewCard must be used within a PreviewCardProvider");
  }

  return context;
};
