import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";
import { useDialogContext } from "./dialog-context";

export type DialogOverlayProps = React.ComponentProps<typeof Dialog.Overlay>;

export default function DialogOverlay({
	className,
	...props
}: DialogOverlayProps) {
	const { slots } = useDialogContext();

	return (
		<Dialog.Overlay
			data-slot="dialog-overlay"
			className={cn(slots.overlay(), className)}
			{...props}
		/>
	);
}
