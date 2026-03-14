import Content from "./select-content.svelte";
import Group from "./select-group.svelte";
import Item from "./select-item.svelte";
import Label from "./select-label.svelte";
import Root from "./select-root.svelte";
import ScrollDownButton from "./select-scroll-down-button.svelte";
import ScrollUpButton from "./select-scroll-up-button.svelte";
import Separator from "./select-separator.svelte";
import Trigger from "./select-trigger.svelte";
import Viewport from "./select-viewport.svelte";

export const Select = {
	Root,
	Trigger,
	Content,
	Item,
	Viewport,
	Group,
	Label,
	Separator,
	ScrollUpButton,
	ScrollDownButton,
};

export {
	Root as SelectRoot,
	Trigger as SelectTrigger,
	Content as SelectContent,
	Item as SelectItem,
	Viewport as SelectViewport,
	Group as SelectGroup,
	Label as SelectLabel,
	Separator as SelectSeparator,
	ScrollUpButton as SelectScrollUpButton,
	ScrollDownButton as SelectScrollDownButton,
};
