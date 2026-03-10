import { cn } from "tailwind-variants";
import { type AlertVariants, alertVariants } from "./alert.variants";
import { AlertContext } from "./alert-context";

export type AlertRootProps = React.ComponentProps<"div"> & AlertVariants;

export default function AlertRoot({
	variant,
	className,
	...props
}: AlertRootProps) {
	const slots = alertVariants({ variant });

	return (
		<AlertContext value={{ slots }}>
			<div
				data-slot="alert"
				role="alert"
				className={cn(slots.root(), className)}
				{...props}
			/>
		</AlertContext>
	);
}
