import AccordionContent from "./accordion-content";
import AccordionHeader from "./accordion-header";
import AccordionItem from "./accordion-item";
import AccordionRoot from "./accordion-root";
import AccordionTrigger from "./accordion-trigger";

export const Accordion = {
	Content: AccordionContent,
	Header: AccordionHeader,
	Item: AccordionItem,
	Root: AccordionRoot,
	Trigger: AccordionTrigger,
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
