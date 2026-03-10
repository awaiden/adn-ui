import { AlertDialog } from "radix-ui";
import { alertDialogVariants } from "./alert-dialog.variants";
import { AlertDialogContext } from "./alert-dialog-context";

export type AlertDialogRootProps = React.ComponentProps<
	typeof AlertDialog.Root
>;

export default function AlertDialogRoot(props: AlertDialogRootProps) {
	const slots = alertDialogVariants();

	return (
		<AlertDialogContext value={{ slots }}>
			<AlertDialog.Root {...props} />
		</AlertDialogContext>
	);
}
