import { ContextMenu } from "radix-ui";

export type ContextMenuRadioGroupProps = React.ComponentProps<
	typeof ContextMenu.RadioGroup
>;

export default function ContextMenuRadioGroup(
	props: ContextMenuRadioGroupProps,
) {
	return (
		<ContextMenu.RadioGroup data-slot="context-menu-radio-group" {...props} />
	);
}
