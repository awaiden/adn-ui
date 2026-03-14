import { RadioGroup } from "radix-ui";
import { cn } from "tailwind-variants";

import { useRadioGroupContext } from "./radio-group-context";

export type RadioGroupIndicatorProps = React.ComponentProps<
	typeof RadioGroup.Indicator
>;

export default function RadioGroupIndicator({
	className,
	...props
}: RadioGroupIndicatorProps) {
	const { slots } = useRadioGroupContext();

	return (
		<RadioGroup.Indicator
			data-slot="radio-group-indicator"
			className={cn(slots.indicator(), className)}
			{...props}
		>
			<div className="radio-group__indicator-dot" />
		</RadioGroup.Indicator>
	);
}
