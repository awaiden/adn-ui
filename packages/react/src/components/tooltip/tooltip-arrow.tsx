import { Tooltip } from "radix-ui";
import { cn } from "tailwind-variants";
import { useTooltipContext } from "./tooltip-context";

export type TooltipArrowProps = React.ComponentProps<typeof Tooltip.Arrow>;

export default function TooltipArrow({
	className,
	...props
}: TooltipArrowProps) {
	const { slots } = useTooltipContext();

	return (
		<Tooltip.Arrow
			data-slot="tooltip-arrow"
			className={cn(slots.arrow(), className)}
			{...props}
		/>
	);
}
