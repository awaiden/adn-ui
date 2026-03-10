import { cn } from "tailwind-variants";
import { useDialogContext } from "./dialog-context";

export type DialogHeaderProps = React.ComponentProps<"div">;

export default function DialogHeader({
	className,
	...props
}: DialogHeaderProps) {
	const { slots } = useDialogContext();

	return (
		<div
			data-slot="dialog-header"
			className={cn(slots.header(), className)}
			{...props}
		/>
	);
}
