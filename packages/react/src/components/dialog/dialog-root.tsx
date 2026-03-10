import { Dialog } from "radix-ui";
import { dialogVariants } from "./dialog.variants";
import { DialogContext } from "./dialog-context";

export type DialogRootProps = React.ComponentProps<typeof Dialog.Root>;

export default function DialogRoot(props: DialogRootProps) {
	const slots = dialogVariants();

	return (
		<DialogContext value={{ slots }}>
			<Dialog.Root data-slot="dialog-root" {...props} />
		</DialogContext>
	);
}
