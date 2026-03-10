import { ContextMenu } from "radix-ui";

export type ContextMenuGroupProps = React.ComponentProps<
	typeof ContextMenu.Group
>;

export default function ContextMenuGroup(props: ContextMenuGroupProps) {
	return <ContextMenu.Group data-slot="context-menu-group" {...props} />;
}
