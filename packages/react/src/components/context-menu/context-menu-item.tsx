import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";
import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuItemProps = React.ComponentProps<
	typeof ContextMenu.Item
>;

export default function ContextMenuItem({
	className,
	...props
}: ContextMenuItemProps) {
	const { slots } = useContextMenuContext();

	return (
		<ContextMenu.Item
			data-slot="context-menu-item"
			className={cn(slots.item(), className)}
			{...props}
		/>
	);
}
