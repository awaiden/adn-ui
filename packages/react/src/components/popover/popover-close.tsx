import { X } from "lucide-react";
import { Popover } from "radix-ui";
import { cn } from "tailwind-variants";

import { usePopoverContext } from "./popover-context";

export type PopoverCloseProps = React.ComponentProps<typeof Popover.Close>;

export default function PopoverClose({
	children,
	className,
	...props
}: PopoverCloseProps) {
	const { slots } = usePopoverContext();

	return (
		<Popover.Close
			data-slot="popover-close"
			className={cn(slots.close(), className)}
			{...props}
		>
			{children ?? (
				<>
					<X className="size-4" />
					<span className="sr-only">Close</span>
				</>
			)}
		</Popover.Close>
	);
}
