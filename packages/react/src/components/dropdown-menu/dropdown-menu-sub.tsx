import { DropdownMenu } from "radix-ui";

export type DropdownMenuSubProps = React.ComponentProps<
	typeof DropdownMenu.Sub
>;

export default function DropdownMenuSub(props: DropdownMenuSubProps) {
	return <DropdownMenu.Sub data-slot="dropdown-menu-sub" {...props} />;
}
