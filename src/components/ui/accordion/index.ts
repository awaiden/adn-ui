import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from "./accordion";

export const Accordion = {
  Header: AccordionHeader,
  Item: AccordionItem,
  Panel: AccordionPanel,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};

export { AccordionHeader, AccordionItem, AccordionPanel, AccordionRoot, AccordionTrigger };

export type {
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
  AccordionTriggerProps,
} from "./accordion";
export { AccordionContext, useAccordionContext } from "./accordion.context";
export { type AccordionVariants, accordionVariants } from "./accordion.variants";
