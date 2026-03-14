import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogTitleProps = React.ComponentProps<
	typeof AlertDialog.Title
>;

export default function AlertDialogTitle({
	className,
	...props
}: AlertDialogTitleProps) {
	const { slots } = useAlertDialogContext();

	return (
		<AlertDialog.Title
			data-slot="alert-dialog-title"
			className={cn(slots.title(), className)}
			{...props}
		/>
	);
}
