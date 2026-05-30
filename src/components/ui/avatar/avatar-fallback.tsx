import { Avatar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAvatarContext } from "./avatar.context";

export type AvatarFallbackProps = React.ComponentProps<typeof Avatar.Fallback>;

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  const { slots } = useAvatarContext();

  return <Avatar.Fallback className={cn(slots.fallback(), className)} {...props} />;
};
