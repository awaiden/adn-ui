import { cn } from "tailwind-variants";

import { useDrawerContext } from "./drawer-context";

export type DrawerHeaderProps = React.ComponentProps<"div">;

export default function DrawerHeader({
	className,
	...props
}: DrawerHeaderProps) {
	const { slots } = useDrawerContext();

	return (
		<div
			data-slot="drawer-header"
			className={cn(slots.header(), className)}
			{...props}
		/>
	);
}
