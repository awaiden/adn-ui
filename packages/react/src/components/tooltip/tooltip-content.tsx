import { Tooltip } from "radix-ui";
import { cn } from "tailwind-variants";
import { useTooltipContext } from "./tooltip-context";

export type TooltipContentProps = React.ComponentProps<typeof Tooltip.Content>;

export default function TooltipContent({
	className,
	children,
	side = "top",
	sideOffset = 4,
	...props
}: TooltipContentProps) {
	const { slots } = useTooltipContext();

	return (
		<Tooltip.Portal>
			<Tooltip.Content
				data-slot="tooltip-content"
				side={side}
				sideOffset={sideOffset}
				className={cn(slots.content(), className)}
				{...props}
			>
				{children}
			</Tooltip.Content>
		</Tooltip.Portal>
	);
}
