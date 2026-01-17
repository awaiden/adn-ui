import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
  AccordionTriggerIcon,
} from "./accordion";

export const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Panel: AccordionPanel,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
  TriggerIcon: AccordionTriggerIcon,
});

export * from "./accordion";

export type { AccordionVariants } from "./accordion.variants";
export { accordionVariants } from "./accordion.variants";
