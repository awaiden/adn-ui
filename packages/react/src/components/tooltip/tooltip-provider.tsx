import { Tooltip } from "radix-ui";

export type TooltipProviderProps = React.ComponentProps<
	typeof Tooltip.Provider
>;

export default function TooltipProvider(props: TooltipProviderProps) {
	return <Tooltip.Provider data-slot="tooltip-provider" {...props} />;
}
