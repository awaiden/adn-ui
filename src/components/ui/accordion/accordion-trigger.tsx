import { ChevronDown } from "lucide-react";
import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAccordionContext } from "./accordion.context";

export type AccordionTriggerProps = React.ComponentProps<typeof Accordion.Trigger>;

export const AccordionTrigger = ({ children, className, ...props }: AccordionTriggerProps) => {
  const { slots } = useAccordionContext();

  return (
    <Accordion.Header className={slots.header()}>
      <Accordion.Trigger className={cn(slots.trigger(), className)} {...props}>
        {children}
        <ChevronDown aria-hidden className={slots.chevron()} />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};
