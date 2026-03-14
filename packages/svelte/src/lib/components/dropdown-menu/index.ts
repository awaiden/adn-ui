import Arrow from "./dropdown-menu-arrow.svelte";
import CheckboxGroup from "./dropdown-menu-checkbox-group.svelte";
import CheckboxItem from "./dropdown-menu-checkbox-item.svelte";
import Content from "./dropdown-menu-content.svelte";
import Group from "./dropdown-menu-group.svelte";
import Item from "./dropdown-menu-item.svelte";
import Label from "./dropdown-menu-label.svelte";
import Portal from "./dropdown-menu-portal.svelte";
import RadioGroup from "./dropdown-menu-radio-group.svelte";
import RadioItem from "./dropdown-menu-radio-item.svelte";
import Root from "./dropdown-menu-root.svelte";
import Separator from "./dropdown-menu-separator.svelte";
import Shortcut from "./dropdown-menu-shortcut.svelte";
import Sub from "./dropdown-menu-sub.svelte";
import SubContent from "./dropdown-menu-sub-content.svelte";
import SubTrigger from "./dropdown-menu-sub-trigger.svelte";
import Trigger from "./dropdown-menu-trigger.svelte";

export const DropdownMenu = {
	Root,
	Trigger,
	Portal,
	Content,
	Arrow,
	Group,
	Label,
	Item,
	CheckboxGroup,
	CheckboxItem,
	RadioGroup,
	RadioItem,
	Separator,
	Shortcut,
	Sub,
	SubTrigger,
	SubContent,
};

export {
	Root as DropdownMenuRoot,
	Trigger as DropdownMenuTrigger,
	Portal as DropdownMenuPortal,
	Content as DropdownMenuContent,
	Arrow as DropdownMenuArrow,
	Group as DropdownMenuGroup,
	Label as DropdownMenuLabel,
	Item as DropdownMenuItem,
	CheckboxGroup as DropdownMenuCheckboxGroup,
	CheckboxItem as DropdownMenuCheckboxItem,
	RadioGroup as DropdownMenuRadioGroup,
	RadioItem as DropdownMenuRadioItem,
	Separator as DropdownMenuSeparator,
	Shortcut as DropdownMenuShortcut,
	Sub as DropdownMenuSub,
	SubTrigger as DropdownMenuSubTrigger,
	SubContent as DropdownMenuSubContent,
};

export { type DropdownMenuVariants, dropdownMenuVariants } from "@adn-ui/core";
