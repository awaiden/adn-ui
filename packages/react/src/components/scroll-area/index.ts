import ScrollAreaCorner from "./scroll-area-corner";
import ScrollAreaRoot from "./scroll-area-root";
import ScrollAreaScrollbar from "./scroll-area-scrollbar";
import ScrollAreaThumb from "./scroll-area-thumb";
import ScrollAreaViewport from "./scroll-area-viewport";

export const ScrollArea = {
	Root: ScrollAreaRoot,
	Viewport: ScrollAreaViewport,
	Scrollbar: ScrollAreaScrollbar,
	Thumb: ScrollAreaThumb,
	Corner: ScrollAreaCorner,
};

export {
	ScrollAreaRoot,
	ScrollAreaViewport,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaCorner,
};

export type ScrollAreaRootProps = React.ComponentProps<typeof ScrollAreaRoot>;
export type ScrollAreaViewportProps = React.ComponentProps<
	typeof ScrollAreaViewport
>;
export type ScrollAreaScrollbarProps = React.ComponentProps<
	typeof ScrollAreaScrollbar
>;
export type ScrollAreaThumbProps = React.ComponentProps<typeof ScrollAreaThumb>;
export type ScrollAreaCornerProps = React.ComponentProps<
	typeof ScrollAreaCorner
>;

export {
	type ScrollAreaVariants,
	scrollAreaVariants,
} from "./scroll-area.variants";
