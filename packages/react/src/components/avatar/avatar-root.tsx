import { type AvatarVariants, avatarVariants } from "@adn-ui/core";
import { Avatar } from "radix-ui";

import { AvatarContext } from "./avatar-context";

export type AvatarRootProps = React.ComponentProps<typeof Avatar.Root> & AvatarVariants;

export default function AvatarRoot({ className, size, ...props }: AvatarRootProps) {
  const slots = avatarVariants({ size });

  return (
    <AvatarContext value={{ slots }}>
      <Avatar.Root className={slots.root({ className })} {...props} />
    </AvatarContext>
  );
}
