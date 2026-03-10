import { Dialog } from "radix-ui";

export type DialogCloseProps = React.ComponentProps<typeof Dialog.Close>;

export default function DialogClose(props: DialogCloseProps) {
	return <Dialog.Close {...props} />;
}
