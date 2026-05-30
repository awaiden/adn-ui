import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAccordionContext } from "./accordion.context";

export type AccordionItemProps = React.ComponentProps<typeof Accordion.Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  const { slots } = useAccordionContext();

  return <Accordion.Item className={cn(slots.item(), className)} {...props} />;
};
