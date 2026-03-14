import Fallback from "./avatar-fallback.svelte";
import Image from "./avatar-image.svelte";
import Root from "./avatar-root.svelte";

export const Avatar = {
	Root,
	Image,
	Fallback,
};

export { Root as AvatarRoot, Image as AvatarImage, Fallback as AvatarFallback };

export { type AvatarVariants, avatarVariants } from "@adn-ui/core";
