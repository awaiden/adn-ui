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
          <h4 className="text-sm font-semibold mb-2">Architecture Overview</h4>
          <p className="text-xs text-muted-foreground mb-3">
            Vernacular architecture is building done outside any academic tradition, and without
            professional guidance. It is not a particular architectural movement or style, but
            rather a broad category encompassing a wide range and variety of building types from
            around the world.
          </p>
          <p className="text-xs text-muted-foreground">
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
