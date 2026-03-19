import { ChevronDown } from "lucide-react";
import { Accordion } from "radix-ui";

import { useAccordionContext } from "./accordion-context";

export type AccordionTriggerProps = React.ComponentProps<typeof Accordion.Trigger>;

export default function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const { slots } = useAccordionContext();

  return (
    <Accordion.Header className={slots.header()}>
      <Accordion.Trigger className={slots.trigger({ className })} {...props}>
        {children}
        <span className={slots.triggerIcon()}>
          <ChevronDown />
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
  );
}
