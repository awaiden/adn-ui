"use client";

import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

export function ScrollAreaDemo() {
  return (
    <ScrollAreaRoot className="h-44 w-80">
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <h4 className="mb-2 text-sm font-semibold">Architecture Overview</h4>
          <p className="text-muted-foreground mb-3 text-xs">
            Vernacular architecture is building done outside any academic tradition, and without
            professional guidance. It is not a particular architectural movement or style, but
            rather a broad category encompassing a wide range and variety of building types from
            around the world.
          </p>
          <p className="text-muted-foreground text-xs">
            This type of architecture usually serves immediate, local needs, is constrained by the
            materials available in its particular region, and reflects local traditions and cultural
            practices.
          </p>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
}
