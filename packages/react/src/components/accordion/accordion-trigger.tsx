import { ChevronDown } from "lucide-react";
import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAccordionContext } from "./accordion-context";
import AccordionHeader from "./accordion-header";

export type AccordionTriggerProps = React.ComponentProps<typeof Accordion.Trigger>;

export default function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const { slots } = useAccordionContext();

  return (
    <AccordionHeader>
      <Accordion.Trigger
        data-slot="accordion-trigger"
        className={cn(slots.trigger(), className)}
        {...props}
      >
        {children}
        <ChevronDown className={slots.chevron()} aria-hidden />
      </Accordion.Trigger>
    </AccordionHeader>
  );
}
