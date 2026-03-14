import { ChevronRight } from "lucide-react";
import { cn } from "tailwind-variants";

import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export default function BreadcrumbSeparator({
	children,
	className,
	...props
}: BreadcrumbSeparatorProps) {
	const { slots } = useBreadcrumbContext();

	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn(slots.separator(), className)}
			{...props}
		>
			{children ?? <ChevronRight className="size-3.5" />}
		</li>
	);
}
