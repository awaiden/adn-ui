import { accordionVariants } from "@adn-ui/core";
import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";
import { AccordionContext } from "./accordion-context";

export type AccordionRootProps = React.ComponentProps<typeof Accordion.Root>;

export default function AccordionRoot({
	className,
	...props
}: AccordionRootProps) {
	const slots = accordionVariants();

	return (
		<AccordionContext value={{ slots }}>
			<Accordion.Root
				data-slot="accordion-root"
				className={cn(slots.root(), className)}
				{...props}
			/>
		</AccordionContext>
	);
}
