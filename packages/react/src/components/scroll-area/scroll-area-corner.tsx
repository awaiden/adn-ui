import { ScrollArea } from "radix-ui";
import { cn } from "tailwind-variants";
import { useScrollAreaContext } from "./scroll-area-context";

export type ScrollAreaCornerProps = React.ComponentProps<
	typeof ScrollArea.Corner
>;

export default function ScrollAreaCorner({
	className,
	...props
}: ScrollAreaCornerProps) {
	const { slots } = useScrollAreaContext();

	return (
		<ScrollArea.Corner
			data-slot="scroll-area-corner"
			className={cn(slots.corner(), className)}
			{...props}
		/>
	);
}
