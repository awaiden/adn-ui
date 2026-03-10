import { DropdownMenu } from "radix-ui";
import { dropdownMenuVariants } from "./dropdown-menu.variants";
import { DropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuRootProps = React.ComponentProps<
	typeof DropdownMenu.Root
>;

export default function DropdownMenuRoot(props: DropdownMenuRootProps) {
	const slots = dropdownMenuVariants();

	return (
		<DropdownMenuContext value={{ slots }}>
			<DropdownMenu.Root data-slot="dropdown-menu-root" {...props} />
		</DropdownMenuContext>
	);
}
