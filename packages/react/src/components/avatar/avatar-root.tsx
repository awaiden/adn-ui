import { Avatar } from "radix-ui";
import { type AvatarVariants, avatarVariants } from "./avatar.variants";
import { AvatarContext } from "./avatar-context";

export type AvatarRootProps = React.ComponentProps<typeof Avatar.Root> &
	AvatarVariants;

export default function AvatarRoot({
	size,
	className,
	...props
}: AvatarRootProps) {
	const slots = avatarVariants({ size });

	return (
		<AvatarContext value={{ slots }}>
			<Avatar.Root className={slots.root({ className })} {...props} />
		</AvatarContext>
	);
}
