import { AvatarFallback, AvatarImage, AvatarRoot } from "./avatar";

export const Avatar = Object.assign(AvatarRoot, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
});

export * from "./avatar";

export type { AvatarVariants } from "./avatar.variants";
export { avatarVariants } from "./avatar.variants";
