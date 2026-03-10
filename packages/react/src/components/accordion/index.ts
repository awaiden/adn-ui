import AccordionContent from "./accordion-content";
import AccordionHeader from "./accordion-header";
import AccordionItem from "./accordion-item";
import AccordionRoot from "./accordion-root";
import AccordionTrigger from "./accordion-trigger";

export const Accordion = {
	Root: AccordionRoot,
	Item: AccordionItem,
	Header: AccordionHeader,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
};

export {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionContent,
};

export type AccordionRootProps = React.ComponentProps<typeof AccordionRoot>;
export type AccordionItemProps = React.ComponentProps<typeof AccordionItem>;
export type AccordionHeaderProps = React.ComponentProps<typeof AccordionHeader>;
export type AccordionTriggerProps = React.ComponentProps<
	typeof AccordionTrigger
>;
export type AccordionContentProps = React.ComponentProps<
	typeof AccordionContent
>;

export {
	type AccordionVariants,
	accordionVariants,
} from "./accordion.variants";
