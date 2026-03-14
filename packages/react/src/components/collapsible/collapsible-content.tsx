import { Collapsible } from "radix-ui";
import { cn } from "tailwind-variants";

import { useCollapsibleContext } from "./collapsible-context";

export type CollapsibleContentProps = React.ComponentProps<
	typeof Collapsible.Content
>;

export default function CollapsibleContent({
	children,
	className,
	...props
}: CollapsibleContentProps) {
	const { slots } = useCollapsibleContext();

	return (
		<Collapsible.Content
			data-slot="collapsible-content"
			className={cn(slots.content(), className)}
			{...props}
		>
			{children}
		</Collapsible.Content>
	);
}
