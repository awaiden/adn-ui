import { Avatar } from "radix-ui";

import { useAvatarContext } from "./avatar-context";

export type AvatarFallbackProps = React.ComponentProps<typeof Avatar.Fallback>;

export default function AvatarFallback({
	className,
	...props
}: AvatarFallbackProps) {
	const { slots } = useAvatarContext();

	return (
		<Avatar.Fallback className={slots.fallback({ className })} {...props} />
	);
}
