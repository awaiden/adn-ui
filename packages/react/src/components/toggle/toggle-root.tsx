import { type ToggleVariants, toggleVariants } from "@adn-ui/core";
import { Toggle } from "radix-ui";

export type ToggleRootProps = React.ComponentProps<typeof Toggle.Root> &
	ToggleVariants;

export default function ToggleRoot({
	variant,
	size,
	className,
	...props
}: ToggleRootProps) {
	return (
		<Toggle.Root
			className={toggleVariants({ variant, size, className })}
			{...props}
		/>
	);
}
