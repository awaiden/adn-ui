import { ChevronRight } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuSubTriggerProps = React.ComponentProps<
	typeof DropdownMenu.SubTrigger
>;

export default function DropdownMenuSubTrigger({
	children,
	className,
	...props
}: DropdownMenuSubTriggerProps) {
	const { slots } = useDropdownMenuContext();

	return (
		<DropdownMenu.SubTrigger
			data-slot="dropdown-menu-sub-trigger"
			className={cn(slots.subTrigger(), className)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto size-4" />
		</DropdownMenu.SubTrigger>
	);
}
