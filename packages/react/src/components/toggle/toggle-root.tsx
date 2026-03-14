import { type ToggleVariants, toggleVariants } from "@adn-ui/core";
import { Toggle } from "radix-ui";

export type ToggleRootProps = React.ComponentProps<typeof Toggle.Root> &
	ToggleVariants;

export default function ToggleRoot({
	className,
	size,
	variant,
	...props
}: ToggleRootProps) {
	return (
		<Toggle.Root
			className={toggleVariants({ className, size, variant })}
			{...props}
		/>
	);
}
