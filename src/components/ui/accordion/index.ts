import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionRoot } from "./accordion-root";
import { AccordionTrigger } from "./accordion-trigger";

export const Accordion = {
  Content: AccordionContent,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};

export { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger };

export type { AccordionContentProps } from "./accordion-content";

export type { AccordionItemProps } from "./accordion-item";

export type { AccordionRootProps } from "./accordion-root";
export type { AccordionTriggerProps } from "./accordion-trigger";
export { AccordionContext, useAccordionContext } from "./accordion.context";
export { type AccordionVariants, accordionVariants } from "./accordion.variants";
