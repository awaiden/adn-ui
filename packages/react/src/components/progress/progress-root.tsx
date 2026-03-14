import { type ProgressVariants, progressVariants } from "@adn-ui/core";
import { Progress } from "radix-ui";
import { ProgressContext } from "./progress-context";

export type ProgressRootProps = React.ComponentProps<typeof Progress.Root> &
	ProgressVariants;

export default function ProgressRoot({
	size,
	className,
	...props
}: ProgressRootProps) {
	const slots = progressVariants({ size });

	return (
		<ProgressContext value={{ slots }}>
			<Progress.Root
				data-slot="progress"
				className={slots.root({ className })}
				{...props}
			/>
		</ProgressContext>
	);
}
