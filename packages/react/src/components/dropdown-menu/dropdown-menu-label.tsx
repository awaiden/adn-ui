import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";
import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuLabelProps = React.ComponentProps<
	typeof DropdownMenu.Label
>;

export default function DropdownMenuLabel({
	className,
	...props
}: DropdownMenuLabelProps) {
	const { slots } = useDropdownMenuContext();

	return (
		<DropdownMenu.Label
			data-slot="dropdown-menu-label"
			className={cn(slots.label(), className)}
			{...props}
		/>
	);
}
