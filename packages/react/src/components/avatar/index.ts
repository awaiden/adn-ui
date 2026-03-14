import AvatarFallback from "./avatar-fallback";
import AvatarImage from "./avatar-image";
import AvatarRoot from "./avatar-root";

export const Avatar = {
	Fallback: AvatarFallback,
	Image: AvatarImage,
	Root: AvatarRoot,
};

export { AvatarRoot, AvatarImage, AvatarFallback };

export type AvatarRootProps = React.ComponentProps<typeof AvatarRoot>;
export type AvatarImageProps = React.ComponentProps<typeof AvatarImage>;
export type AvatarFallbackProps = React.ComponentProps<typeof AvatarFallback>;

export { type AvatarVariants, avatarVariants } from "@adn-ui/core";
