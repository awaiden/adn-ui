import { DropdownMenu } from "radix-ui";

export type DropdownMenuGroupProps = React.ComponentProps<
	typeof DropdownMenu.Group
>;

export default function DropdownMenuGroup(props: DropdownMenuGroupProps) {
	return <DropdownMenu.Group data-slot="dropdown-menu-group" {...props} />;
}
