import { Popover } from "radix-ui";
import { popoverVariants } from "./popover.variants";
import { PopoverContext } from "./popover-context";

export type PopoverRootProps = React.ComponentProps<typeof Popover.Root>;

export default function PopoverRoot(props: PopoverRootProps) {
	const slots = popoverVariants();

	return (
		<PopoverContext value={{ slots }}>
			<Popover.Root data-slot="popover-root" {...props} />
		</PopoverContext>
	);
}
