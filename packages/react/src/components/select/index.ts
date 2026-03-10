import SelectContent from "./select-content";
import SelectGroup from "./select-group";
import SelectItem from "./select-item";
import SelectLabel from "./select-label";
import SelectRoot from "./select-root";
import SelectSeparator from "./select-separator";
import SelectTrigger from "./select-trigger";
import SelectValue from "./select-value";

export const Select = {
	Root: SelectRoot,
	Trigger: SelectTrigger,
	Value: SelectValue,
	Content: SelectContent,
	Item: SelectItem,
	Group: SelectGroup,
	Label: SelectLabel,
	Separator: SelectSeparator,
};

export {
	SelectRoot,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectLabel,
	SelectSeparator,
};

export type SelectRootProps = React.ComponentProps<typeof SelectRoot>;
export type SelectTriggerProps = React.ComponentProps<typeof SelectTrigger>;
export type SelectValueProps = React.ComponentProps<typeof SelectValue>;
export type SelectContentProps = React.ComponentProps<typeof SelectContent>;
export type SelectItemProps = React.ComponentProps<typeof SelectItem>;
export type SelectGroupProps = React.ComponentProps<typeof SelectGroup>;
export type SelectLabelProps = React.ComponentProps<typeof SelectLabel>;
export type SelectSeparatorProps = React.ComponentProps<typeof SelectSeparator>;

export { type SelectVariants, selectVariants } from "./select.variants";
