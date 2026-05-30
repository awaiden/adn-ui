import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { AvatarRoot } from "./avatar-root";

export const Avatar = {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
};

export { AvatarFallback, AvatarImage, AvatarRoot };

export type { AvatarFallbackProps } from "./avatar-fallback";

export type { AvatarImageProps } from "./avatar-image";

export type { AvatarRootProps } from "./avatar-root";
export { AvatarContext, useAvatarContext } from "./avatar.context";
export { type AvatarVariants, avatarVariants } from "./avatar.variants";
