import CheckboxItem from "./context-menu-checkbox-item.svelte";
import Content from "./context-menu-content.svelte";
import Group from "./context-menu-group.svelte";
import Item from "./context-menu-item.svelte";
import Label from "./context-menu-label.svelte";
import RadioGroup from "./context-menu-radio-group.svelte";
import RadioItem from "./context-menu-radio-item.svelte";
import Root from "./context-menu-root.svelte";
import Separator from "./context-menu-separator.svelte";
import Shortcut from "./context-menu-shortcut.svelte";
import Sub from "./context-menu-sub.svelte";
import SubContent from "./context-menu-sub-content.svelte";
import SubTrigger from "./context-menu-sub-trigger.svelte";
import Trigger from "./context-menu-trigger.svelte";

export const ContextMenu = {
	Root,
	CheckboxItem,
	Content,
	Group,
	Item,
	Label,
	RadioGroup,
	RadioItem,
	Separator,
	Shortcut,
	SubContent,
	SubTrigger,
	Sub,
	Trigger,
};

export {
	Root as ContextMenuRoot,
	CheckboxItem as ContextMenuCheckboxItem,
	Content as ContextMenuContent,
	Group as ContextMenuGroup,
	Item as ContextMenuItem,
	Label as ContextMenuLabel,
	RadioGroup as ContextMenuRadioGroup,
	RadioItem as ContextMenuRadioItem,
	Separator as ContextMenuSeparator,
	Shortcut as ContextMenuShortcut,
	SubContent as ContextMenuSubContent,
	SubTrigger as ContextMenuSubTrigger,
	Sub as ContextMenuSub,
	Trigger as ContextMenuTrigger,
};

export { type ContextMenuVariants, contextMenuVariants } from "@adn-ui/core";
