import { cardVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";

import { CardContext } from "./card-context";

export type CardRootProps = React.ComponentProps<"div">;

export default function CardRoot({ className, ...props }: CardRootProps) {
  const slots = cardVariants({ className });

  return (
    <CardContext value={{ slots }}>
      <div data-slot="card-root" className={cn(slots.root(), className)} {...props} />
    </CardContext>
  );
}
