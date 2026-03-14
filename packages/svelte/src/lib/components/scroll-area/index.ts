import Corner from "./scroll-area-corner.svelte";
import Root from "./scroll-area-root.svelte";
import Scrollbar from "./scroll-area-scrollbar.svelte";
import Thumb from "./scroll-area-thumb.svelte";
import Viewport from "./scroll-area-viewport.svelte";

const ScrollArea = {
	Root,
	Viewport,
	Scrollbar,
	Thumb,
	Corner,
};

export {
	ScrollArea,
	Root as ScrollAreaRoot,
	Viewport as ScrollAreaViewport,
	Scrollbar as ScrollAreaScrollbar,
	Thumb as ScrollAreaThumb,
	Corner as ScrollAreaCorner,
};
