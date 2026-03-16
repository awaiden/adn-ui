import { cn } from "@adn-ui/core";
import { Accordion } from "radix-ui";

import { useAccordionContext } from "./accordion-context";

export type AccordionHeaderProps = React.ComponentProps<typeof Accordion.Header>;

export default function AccordionHeader({ className, ...props }: AccordionHeaderProps) {
  const { slots } = useAccordionContext();

  return (
    <Accordion.Header
      data-slot="accordion-header"
      className={cn(slots.header(), className)}
      {...props}
    />
  );
}
