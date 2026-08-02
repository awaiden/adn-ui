"use client";

import { AspectRatio } from "./aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="w-[300px]">
      <AspectRatio ratio={16 / 9} className="bg-muted flex items-center justify-center rounded-lg border">
        <span className="text-muted-foreground text-sm font-medium">16 / 9 Aspect Ratio</span>
      </AspectRatio>
    </div>
  );
}
