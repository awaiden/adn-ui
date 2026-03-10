import { cn } from "tailwind-variants";
import { useBreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbPageProps = React.ComponentProps<"span">;

export default function BreadcrumbPage({
	className,
	...props
}: BreadcrumbPageProps) {
	const { slots } = useBreadcrumbContext();

	return (
		<span
			data-slot="breadcrumb-page"
			aria-disabled="true"
			aria-current="page"
			className={cn(slots.page(), className)}
			{...props}
		/>
	);
}
