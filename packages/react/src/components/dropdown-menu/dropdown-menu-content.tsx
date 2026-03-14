import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuContentProps = React.ComponentProps<
	typeof DropdownMenu.Content
>;

export default function DropdownMenuContent({
	children,
	className,
	sideOffset = 4,
	...props
}: DropdownMenuContentProps) {
	const { slots } = useDropdownMenuContext();

	return (
		<DropdownMenu.Portal>
			<DropdownMenu.Content
				data-slot="dropdown-menu-content"
				sideOffset={sideOffset}
				className={cn(slots.content(), className)}
				{...props}
			>
				{children}
			</DropdownMenu.Content>
		</DropdownMenu.Portal>
	);
}
