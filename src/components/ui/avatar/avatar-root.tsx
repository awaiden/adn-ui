import "./avatar.css";

import { Avatar } from "radix-ui";
import { cn } from "tailwind-variants";

import { AvatarContext } from "./avatar.context";
import { avatarVariants, type AvatarVariants } from "./avatar.variants";

export type AvatarRootProps = AvatarVariants & React.ComponentProps<typeof Avatar.Root>;

export const AvatarRoot = ({ className, size, ...props }: AvatarRootProps) => {
  const slots = avatarVariants({ size });

  return (
    <AvatarContext value={{ slots }}>
      <Avatar.Root className={cn(slots.root(), className)} {...props} />
    </AvatarContext>
  );
};
