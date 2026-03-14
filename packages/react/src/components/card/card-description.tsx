import { cn } from "tailwind-variants";

import { useCardContext } from "./card-context";

export type CardDescriptionProps = React.ComponentProps<"p">;

export default function CardDescription({ className, ...props }: CardDescriptionProps) {
  const { slots } = useCardContext();

  return (
    <p data-slot="card-description" className={cn(slots.description(), className)} {...props} />
  );
}
