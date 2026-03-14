import { Avatar } from "radix-ui";

import { useAvatarContext } from "./avatar-context";

export type AvatarImageProps = React.ComponentProps<typeof Avatar.Image>;

export default function AvatarImage({ className, ...props }: AvatarImageProps) {
  const { slots } = useAvatarContext();

  return <Avatar.Image className={slots.image({ className })} {...props} />;
}
