import "./accordion.css";

import { Accordion } from "radix-ui";
import { cn } from "tailwind-variants";

import { AccordionContext } from "./accordion.context";
import { accordionVariants } from "./accordion.variants";

export type AccordionRootProps = React.ComponentProps<typeof Accordion.Root>;

export const AccordionRoot = ({ className, ...props }: AccordionRootProps) => {
  const slots = accordionVariants();

  return (
    <AccordionContext value={{ slots }}>
      <Accordion.Root className={cn(slots.root(), className)} {...props} />
    </AccordionContext>
  );
};
