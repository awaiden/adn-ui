"use client";

import React from "react";
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "./scroll-area";

export default {
  title: "Components/ScrollArea",
  component: ScrollAreaRoot,
};

export const Default = () => (
  <ScrollAreaRoot className="h-32 w-48 rounded-md border p-4">
    <ScrollAreaViewport className="h-full w-full">
      <div className="space-y-2 text-sm">
        <p>Item 1</p><p>Item 2</p><p>Item 3</p><p>Item 4</p><p>Item 5</p><p>Item 6</p>
      </div>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
);
