import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";
import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuSeparatorProps = React.ComponentProps<
	typeof DropdownMenu.Separator
>;

export default function DropdownMenuSeparator({
	className,
	...props
}: DropdownMenuSeparatorProps) {
	const { slots } = useDropdownMenuContext();

	return (
		<DropdownMenu.Separator
			data-slot="dropdown-menu-separator"
			className={cn(slots.separator(), className)}
			{...props}
		/>
	);
}
