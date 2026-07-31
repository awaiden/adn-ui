"use client";

import React from "react";
import {
  PreviewCardRoot,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
} from "./preview-card";

export default {
  title: "Components/PreviewCard",
  component: PreviewCardRoot,
};

export const Default = () => (
  <PreviewCardRoot>
    <PreviewCardTrigger className="text-primary underline text-sm cursor-pointer">
      @nextjs
    </PreviewCardTrigger>
    <PreviewCardPortal>
      <PreviewCardPositioner>
        <PreviewCardPopup className="p-4 max-w-xs border rounded-lg shadow-lg bg-popover text-popover-foreground">
          <h4 className="text-sm font-semibold">Next.js</h4>
          <p className="text-xs text-muted-foreground mt-1">The React Framework for the Web.</p>
        </PreviewCardPopup>
      </PreviewCardPositioner>
    </PreviewCardPortal>
  </PreviewCardRoot>
);
