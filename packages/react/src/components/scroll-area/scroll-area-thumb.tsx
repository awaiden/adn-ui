import { ScrollArea } from "radix-ui";
import { cn } from "tailwind-variants";

import { useScrollAreaContext } from "./scroll-area-context";

export type ScrollAreaThumbProps = React.ComponentProps<
	typeof ScrollArea.Thumb
>;

export default function ScrollAreaThumb({
	className,
	...props
}: ScrollAreaThumbProps) {
	const { slots } = useScrollAreaContext();

	return (
		<ScrollArea.Thumb
			data-slot="scroll-area-thumb"
			className={cn(slots.thumb(), className)}
			{...props}
		/>
	);
}
