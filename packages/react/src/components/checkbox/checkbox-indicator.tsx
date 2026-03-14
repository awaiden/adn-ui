import { Check } from "lucide-react";
import { Checkbox } from "radix-ui";

import { useCheckboxContext } from "./checkbox-context";

export type CheckboxIndicatorProps = React.ComponentProps<
	typeof Checkbox.Indicator
>;

export default function CheckboxIndicator({
	children,
	className,
	...props
}: CheckboxIndicatorProps) {
	const { slots } = useCheckboxContext();

	return (
		<Checkbox.Indicator className={slots.indicator({ className })} {...props}>
			{children || <Check className="size-full" />}
		</Checkbox.Indicator>
	);
}
