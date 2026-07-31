import { AvatarFallback, AvatarImage, AvatarRoot } from "./avatar";

export const Avatar = {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
};

export { AvatarFallback, AvatarImage, AvatarRoot };

export type { AvatarFallbackProps, AvatarImageProps, AvatarProps } from "./avatar";
export { AvatarContext, useAvatarContext } from "./avatar.context";
export { type AvatarVariants, avatarVariants } from "./avatar.variants";
