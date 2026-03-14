import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDrawerContext } from "./drawer-context";

export type DrawerDescriptionProps = React.ComponentProps<
	typeof Dialog.Description
>;

export default function DrawerDescription({
	className,
	...props
}: DrawerDescriptionProps) {
	const { slots } = useDrawerContext();

	return (
		<Dialog.Description
			data-slot="drawer-description"
			className={cn(slots.description(), className)}
			{...props}
		/>
	);
}
