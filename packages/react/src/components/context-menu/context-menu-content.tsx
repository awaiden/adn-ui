import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuContentProps = React.ComponentProps<
	typeof ContextMenu.Content
>;

export default function ContextMenuContent({
	children,
	className,
	...props
}: ContextMenuContentProps) {
	const { slots } = useContextMenuContext();

	return (
		<ContextMenu.Portal>
			<ContextMenu.Content
				data-slot="context-menu-content"
				className={cn(slots.content(), className)}
				{...props}
			>
				{children}
			</ContextMenu.Content>
		</ContextMenu.Portal>
	);
}
