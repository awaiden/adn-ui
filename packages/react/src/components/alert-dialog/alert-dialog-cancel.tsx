import { buttonVariants } from "@adn-ui/core";
import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

export type AlertDialogCancelProps = React.ComponentProps<
	typeof AlertDialog.Cancel
>;

export default function AlertDialogCancel({
	className,
	...props
}: AlertDialogCancelProps) {
	return (
		<AlertDialog.Cancel
			data-slot="alert-dialog-cancel"
			className={cn(buttonVariants({ variant: "outline" }), className)}
			{...props}
		/>
	);
}
