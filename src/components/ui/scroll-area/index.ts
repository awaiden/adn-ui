import {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

export const ScrollArea = {
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
};

export {
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
};

export type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "./scroll-area";
export { ScrollAreaContext, useScrollAreaContext } from "./scroll-area.context";
export { type ScrollAreaVariants, scrollAreaVariants } from "./scroll-area.variants";
