import {
  ScrollAreaContent,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Content: ScrollAreaContent,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});

export * from "./scroll-area";

export type { ScrollAreaVariants } from "./scroll-area.variants";
export { scrollAreaVariants } from "./scroll-area.variants";
