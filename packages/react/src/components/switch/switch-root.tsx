import { Switch } from "radix-ui";
import { type SwitchVariants, switchVariants } from "./switch.variants";
import { SwitchContext } from "./switch-context";

export type SwitchRootProps = React.ComponentProps<typeof Switch.Root> &
	SwitchVariants;

export default function SwitchRoot({
	size,
	className,
	...props
}: SwitchRootProps) {
	const slots = switchVariants({ size });

	return (
		<SwitchContext value={{ slots }}>
			<Switch.Root className={slots.root({ className })} {...props} />
		</SwitchContext>
	);
}
