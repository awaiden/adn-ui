import { cn } from "tailwind-variants";
import { useTableContext } from "./table-context";

export type TableBodyProps = React.ComponentProps<"tbody">;

export default function TableBody({ className, ...props }: TableBodyProps) {
	const { slots } = useTableContext();

	return (
		<tbody
			data-slot="table-body"
			className={cn(slots.body(), className)}
			{...props}
		/>
	);
}
