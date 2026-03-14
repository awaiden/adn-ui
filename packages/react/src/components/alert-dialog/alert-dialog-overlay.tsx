import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogOverlayProps = React.ComponentProps<
	typeof AlertDialog.Overlay
>;

export default function AlertDialogOverlay({
	className,
	...props
}: AlertDialogOverlayProps) {
	const { slots } = useAlertDialogContext();

	return (
		<AlertDialog.Overlay
			data-slot="alert-dialog-overlay"
			className={cn(slots.overlay(), className)}
			{...props}
		/>
	);
}
