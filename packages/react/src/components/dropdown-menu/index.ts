import DropdownMenuCheckboxItem from "./dropdown-menu-checkbox-item";
import DropdownMenuContent from "./dropdown-menu-content";
import DropdownMenuGroup from "./dropdown-menu-group";
import DropdownMenuItem from "./dropdown-menu-item";
import DropdownMenuLabel from "./dropdown-menu-label";
import DropdownMenuRadioGroup from "./dropdown-menu-radio-group";
import DropdownMenuRadioItem from "./dropdown-menu-radio-item";
import DropdownMenuRoot from "./dropdown-menu-root";
import DropdownMenuSeparator from "./dropdown-menu-separator";
import DropdownMenuShortcut from "./dropdown-menu-shortcut";
import DropdownMenuSub from "./dropdown-menu-sub";
import DropdownMenuSubContent from "./dropdown-menu-sub-content";
import DropdownMenuSubTrigger from "./dropdown-menu-sub-trigger";
import DropdownMenuTrigger from "./dropdown-menu-trigger";

export const DropdownMenu = {
	CheckboxItem: DropdownMenuCheckboxItem,
	Content: DropdownMenuContent,
	Group: DropdownMenuGroup,
	Item: DropdownMenuItem,
	Label: DropdownMenuLabel,
	RadioGroup: DropdownMenuRadioGroup,
	RadioItem: DropdownMenuRadioItem,
	Root: DropdownMenuRoot,
	Separator: DropdownMenuSeparator,
	Shortcut: DropdownMenuShortcut,
	Sub: DropdownMenuSub,
	SubContent: DropdownMenuSubContent,
	SubTrigger: DropdownMenuSubTrigger,
	Trigger: DropdownMenuTrigger,
};

export {
	DropdownMenuRoot,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
	DropdownMenuGroup,
};

export type DropdownMenuRootProps = React.ComponentProps<
	typeof DropdownMenuRoot
>;
export type DropdownMenuTriggerProps = React.ComponentProps<
	typeof DropdownMenuTrigger
>;
export type DropdownMenuContentProps = React.ComponentProps<
	typeof DropdownMenuContent
>;
export type DropdownMenuItemProps = React.ComponentProps<
	typeof DropdownMenuItem
>;
export type DropdownMenuCheckboxItemProps = React.ComponentProps<
	typeof DropdownMenuCheckboxItem
>;
export type DropdownMenuRadioGroupProps = React.ComponentProps<
	typeof DropdownMenuRadioGroup
>;
export type DropdownMenuRadioItemProps = React.ComponentProps<
	typeof DropdownMenuRadioItem
>;
export type DropdownMenuLabelProps = React.ComponentProps<
	typeof DropdownMenuLabel
>;
export type DropdownMenuSeparatorProps = React.ComponentProps<
	typeof DropdownMenuSeparator
>;
export type DropdownMenuShortcutProps = React.ComponentProps<
	typeof DropdownMenuShortcut
>;
export type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuSub>;
export type DropdownMenuSubTriggerProps = React.ComponentProps<
	typeof DropdownMenuSubTrigger
>;
export type DropdownMenuSubContentProps = React.ComponentProps<
	typeof DropdownMenuSubContent
>;
export type DropdownMenuGroupProps = React.ComponentProps<
	typeof DropdownMenuGroup
>;

export { type DropdownMenuVariants, dropdownMenuVariants } from "@adn-ui/core";
