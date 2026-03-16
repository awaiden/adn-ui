import { cn } from "@adn-ui/core";
import { Accordion } from "radix-ui";

import { useAccordionContext } from "./accordion-context";

export type AccordionItemProps = React.ComponentProps<typeof Accordion.Item>;

export default function AccordionItem({ className, ...props }: AccordionItemProps) {
  const { slots } = useAccordionContext();

  return (
    <Accordion.Item data-slot="accordion-item" className={cn(slots.item(), className)} {...props} />
  );
}
