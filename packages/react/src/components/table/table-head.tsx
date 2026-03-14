import { cn } from "tailwind-variants";

import { useTableContext } from "./table-context";

export type TableHeadProps = React.ComponentProps<"th">;

export default function TableHead({ className, ...props }: TableHeadProps) {
	const { slots } = useTableContext();

	return (
		<th
			data-slot="table-head"
			className={cn(slots.head(), className)}
			{...props}
		/>
	);
}
