import { cn } from "tailwind-variants";

import { useCardContext } from "./card.context";

export type CardTitleProps = React.ComponentProps<"h2">;

export const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  const { slots } = useCardContext();
  return (
    <h2 className={cn(slots.title(), className)} {...props}>
      {children}
    </h2>
  );
};
