import { Progress } from "radix-ui";

import { useProgressContext } from "./progress-context";

export type ProgressIndicatorProps = React.ComponentProps<
	typeof Progress.Indicator
>;

export default function ProgressIndicator({
	className,
	style,
	...props
}: ProgressIndicatorProps) {
	const { slots } = useProgressContext();

	return (
		<Progress.Indicator
			data-slot="progress-indicator"
			className={slots.indicator({ className })}
			style={style}
			{...props}
		/>
	);
}
