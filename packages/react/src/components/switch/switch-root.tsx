import { type SwitchVariants, switchVariants } from "@adn-ui/core";
import { Switch } from "radix-ui";

import { SwitchContext } from "./switch-context";

export type SwitchRootProps = React.ComponentProps<typeof Switch.Root> &
	SwitchVariants;

export default function SwitchRoot({
	className,
	size,
	...props
}: SwitchRootProps) {
	const slots = switchVariants({ size });

	return (
		<SwitchContext value={{ slots }}>
			<Switch.Root className={slots.root({ className })} {...props} />
		</SwitchContext>
	);
}
