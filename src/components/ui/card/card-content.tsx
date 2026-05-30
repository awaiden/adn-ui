import { cn } from "tailwind-variants";

import { useCardContext } from "./card.context";

export type CardContentProps = React.ComponentProps<"div">;

export const CardContent = ({ children, className, ...props }: CardContentProps) => {
  const { slots } = useCardContext();
  return (
    <div className={cn(slots.content(), className)} {...props}>
      {children}
    </div>
  );
};
