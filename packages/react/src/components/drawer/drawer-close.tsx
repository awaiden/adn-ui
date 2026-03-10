import { Dialog } from "radix-ui";

export type DrawerCloseProps = React.ComponentProps<typeof Dialog.Close>;

export default function DrawerClose(props: DrawerCloseProps) {
	return <Dialog.Close {...props} />;
}
