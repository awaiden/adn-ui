import { Avatar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAvatarContext } from "./avatar.context";

export type AvatarImageProps = React.ComponentProps<typeof Avatar.Image>;

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  const { slots } = useAvatarContext();

  return <Avatar.Image className={cn(slots.image(), className)} {...props} />;
};
