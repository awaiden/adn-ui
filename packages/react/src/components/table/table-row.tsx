import { cn } from "tailwind-variants";
import { useTableContext } from "./table-context";

export type TableRowProps = React.ComponentProps<"tr">;

export default function TableRow({ className, ...props }: TableRowProps) {
	const { slots } = useTableContext();

	return (
		<tr
			data-slot="table-row"
			className={cn(slots.row(), className)}
			{...props}
		/>
	);
}
