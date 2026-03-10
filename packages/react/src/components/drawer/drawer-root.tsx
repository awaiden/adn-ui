import { Dialog } from "radix-ui";
import { type DrawerVariants, drawerVariants } from "./drawer.variants";
import { DrawerContext } from "./drawer-context";

export type DrawerRootProps = React.ComponentProps<typeof Dialog.Root> &
	DrawerVariants;

export default function DrawerRoot({ side, ...props }: DrawerRootProps) {
	const slots = drawerVariants({ side });

	return (
		<DrawerContext value={{ slots }}>
			<Dialog.Root data-slot="drawer-root" {...props} />
		</DrawerContext>
	);
}
