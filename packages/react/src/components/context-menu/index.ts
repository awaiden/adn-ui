import ContextMenuCheckboxItem from "./context-menu-checkbox-item";
import ContextMenuContent from "./context-menu-content";
import ContextMenuGroup from "./context-menu-group";
import ContextMenuItem from "./context-menu-item";
import ContextMenuLabel from "./context-menu-label";
import ContextMenuRadioGroup from "./context-menu-radio-group";
import ContextMenuRadioItem from "./context-menu-radio-item";
import ContextMenuRoot from "./context-menu-root";
import ContextMenuSeparator from "./context-menu-separator";
import ContextMenuShortcut from "./context-menu-shortcut";
import ContextMenuSub from "./context-menu-sub";
import ContextMenuSubContent from "./context-menu-sub-content";
import ContextMenuSubTrigger from "./context-menu-sub-trigger";
import ContextMenuTrigger from "./context-menu-trigger";

export const ContextMenu = {
	CheckboxItem: ContextMenuCheckboxItem,
	Content: ContextMenuContent,
	Group: ContextMenuGroup,
	Item: ContextMenuItem,
	Label: ContextMenuLabel,
	RadioGroup: ContextMenuRadioGroup,
	RadioItem: ContextMenuRadioItem,
	Root: ContextMenuRoot,
	Separator: ContextMenuSeparator,
	Shortcut: ContextMenuShortcut,
	Sub: ContextMenuSub,
	SubContent: ContextMenuSubContent,
	SubTrigger: ContextMenuSubTrigger,
	Trigger: ContextMenuTrigger,
};

export {
	ContextMenuRoot,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubTrigger,
	ContextMenuSubContent,
	ContextMenuGroup,
};

export type ContextMenuRootProps = React.ComponentProps<typeof ContextMenuRoot>;
export type ContextMenuTriggerProps = React.ComponentProps<
	typeof ContextMenuTrigger
>;
export type ContextMenuContentProps = React.ComponentProps<
	typeof ContextMenuContent
>;
export type ContextMenuItemProps = React.ComponentProps<typeof ContextMenuItem>;
export type ContextMenuCheckboxItemProps = React.ComponentProps<
	typeof ContextMenuCheckboxItem
>;
export type ContextMenuRadioGroupProps = React.ComponentProps<
	typeof ContextMenuRadioGroup
>;
export type ContextMenuRadioItemProps = React.ComponentProps<
	typeof ContextMenuRadioItem
>;
export type ContextMenuLabelProps = React.ComponentProps<
	typeof ContextMenuLabel
>;
export type ContextMenuSeparatorProps = React.ComponentProps<
	typeof ContextMenuSeparator
>;
export type ContextMenuShortcutProps = React.ComponentProps<
	typeof ContextMenuShortcut
>;
export type ContextMenuSubProps = React.ComponentProps<typeof ContextMenuSub>;
export type ContextMenuSubTriggerProps = React.ComponentProps<
	typeof ContextMenuSubTrigger
>;
export type ContextMenuSubContentProps = React.ComponentProps<
	typeof ContextMenuSubContent
>;
export type ContextMenuGroupProps = React.ComponentProps<
	typeof ContextMenuGroup
>;

export { type ContextMenuVariants, contextMenuVariants } from "@adn-ui/core";
