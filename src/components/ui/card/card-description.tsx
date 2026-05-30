import { cn } from "tailwind-variants";

import { useCardContext } from "./card.context";

export type CardDescriptionProps = React.ComponentProps<"p">;

export const CardDescription = ({ children, className, ...props }: CardDescriptionProps) => {
  const { slots } = useCardContext();
  return (
    <p className={cn(slots.description(), className)} {...props}>
      {children}
    </p>
  );
};
