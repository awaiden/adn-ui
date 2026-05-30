import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAccordionContext } from "./accordion.context";

export type AccordionContentProps = React.ComponentProps<typeof Accordion.Content>;

export const AccordionContent = ({ children, className, ...props }: AccordionContentProps) => {
  const { slots } = useAccordionContext();

  return (
    <Accordion.Content className={cn(slots.content(), className)} {...props}>
      <div className={slots.contentText()}>{children}</div>
    </Accordion.Content>
  );
};
