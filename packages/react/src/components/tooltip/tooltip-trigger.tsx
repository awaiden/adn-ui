import { Tooltip } from "radix-ui";

export type TooltipTriggerProps = React.ComponentProps<typeof Tooltip.Trigger>;

export default function TooltipTrigger(props: TooltipTriggerProps) {
	return <Tooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}
