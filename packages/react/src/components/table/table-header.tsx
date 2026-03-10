import { cn } from "tailwind-variants";
import { useTableContext } from "./table-context";

export type TableHeaderProps = React.ComponentProps<"thead">;

export default function TableHeader({ className, ...props }: TableHeaderProps) {
	const { slots } = useTableContext();

	return (
		<thead
			data-slot="table-header"
			className={cn(slots.header(), className)}
			{...props}
		/>
	);
}
