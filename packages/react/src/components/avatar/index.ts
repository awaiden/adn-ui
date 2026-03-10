import AvatarFallback from "./avatar-fallback";
import AvatarImage from "./avatar-image";
import AvatarRoot from "./avatar-root";

export const Avatar = {
	Root: AvatarRoot,
	Image: AvatarImage,
	Fallback: AvatarFallback,
};

export { AvatarRoot, AvatarImage, AvatarFallback };

export type AvatarRootProps = React.ComponentProps<typeof AvatarRoot>;
export type AvatarImageProps = React.ComponentProps<typeof AvatarImage>;
export type AvatarFallbackProps = React.ComponentProps<typeof AvatarFallback>;

export { type AvatarVariants, avatarVariants } from "./avatar.variants";
