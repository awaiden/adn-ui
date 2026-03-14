import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAccordionContext } from "./accordion-context";

export type AccordionContentProps = React.ComponentProps<
	typeof Accordion.Content
>;

export default function AccordionContent({
	children,
	className,
	...props
}: AccordionContentProps) {
	const { slots } = useAccordionContext();

	return (
		<Accordion.Content
			data-slot="accordion-content"
			className={cn(slots.content(), className)}
			{...props}
		>
			{children}
		</Accordion.Content>
	);
}
