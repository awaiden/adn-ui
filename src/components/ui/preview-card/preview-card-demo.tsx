"use client";

import {
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardRoot,
  PreviewCardTrigger,
} from "./preview-card";

export function PreviewCardDemo({ text = "Typography" }: { text?: string }) {
  return (
    <div className="p-2">
      <p className="text-foreground text-sm">
        The principles of good{" "}
        <PreviewCardRoot>
          <PreviewCardTrigger href="#">{text}</PreviewCardTrigger>
          <PreviewCardPortal>
            <PreviewCardPositioner sideOffset={8}>
              <PreviewCardPopup>
                <div className="flex flex-col gap-1.5 p-1">
                  <h4 className="text-sm font-semibold">{text}</h4>
                  <p className="text-muted-foreground text-xs">
                    Typography is the art and technique of arranging type to make written language
                    legible, readable, and appealing when displayed.
                  </p>
                </div>
              </PreviewCardPopup>
            </PreviewCardPositioner>
          </PreviewCardPortal>
        </PreviewCardRoot>{" "}
        remain critical in modern UI design.
      </p>
    </div>
  );
}
