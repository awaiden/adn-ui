import { tooltipVariants } from "@adn-ui/core";
import { Tooltip } from "radix-ui";
import { TooltipContext } from "./tooltip-context";

export type TooltipRootProps = React.ComponentProps<typeof Tooltip.Root>;

export default function TooltipRoot(props: TooltipRootProps) {
	const slots = tooltipVariants();

	return (
		<TooltipContext value={{ slots }}>
			<Tooltip.Root data-slot="tooltip-root" {...props} />
		</TooltipContext>
	);
}
