import "./card.css";

import { cn } from "tailwind-variants";

import { CardContext } from "./card.context";
import { cardVariants, type CardVariants } from "./card.variants";

export type CardProps = CardVariants & React.ComponentProps<"div">;

export const CardRoot = ({ children, className, variant, ...props }: CardProps) => {
  const slots = cardVariants({ variant });

  return (
    <CardContext value={{ slots }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </CardContext>
  );
};
