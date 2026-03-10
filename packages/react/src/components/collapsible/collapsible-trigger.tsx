import { Collapsible } from "radix-ui";
import { cn } from "tailwind-variants";
import { useCollapsibleContext } from "./collapsible-context";

export type CollapsibleTriggerProps = React.ComponentProps<
	typeof Collapsible.Trigger
>;

export default function CollapsibleTrigger({
	className,
	...props
}: CollapsibleTriggerProps) {
	const { slots } = useCollapsibleContext();

	return (
		<Collapsible.Trigger
			data-slot="collapsible-trigger"
			className={cn(slots.trigger(), className)}
			{...props}
		/>
	);
}
