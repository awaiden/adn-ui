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
    <PreviewCardTrigger className="text-primary cursor-pointer text-sm underline">
      @nextjs
    </PreviewCardTrigger>
    <PreviewCardPortal>
      <PreviewCardPositioner>
        <PreviewCardPopup className="bg-popover text-popover-foreground max-w-xs rounded-lg border p-4 shadow-lg">
          <h4 className="text-sm font-semibold">Next.js</h4>
          <p className="text-muted-foreground mt-1 text-xs">The React Framework for the Web.</p>
        </PreviewCardPopup>
      </PreviewCardPositioner>
    </PreviewCardPortal>
  </PreviewCardRoot>
);
