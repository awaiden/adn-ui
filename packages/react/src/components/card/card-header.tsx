import { cn } from "@adn-ui/core";

import { useCardContext } from "./card-context";

export type CardHeaderProps = React.ComponentProps<"div">;

export default function CardHeader({ className, ...props }: CardHeaderProps) {
  const { slots } = useCardContext();

  return <div data-slot="card-header" className={cn(slots.header(), className)} {...props} />;
}
