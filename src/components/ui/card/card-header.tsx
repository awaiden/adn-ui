import { cn } from "tailwind-variants";

import { useCardContext } from "./card.context";

export type CardHeaderProps = React.ComponentProps<"div">;

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  const { slots } = useCardContext();
  return (
    <div className={cn(slots.header(), className)} {...props}>
      {children}
    </div>
  );
};
