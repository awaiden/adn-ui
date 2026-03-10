import { cn } from "tailwind-variants";
import { breadcrumbVariants } from "./breadcrumb.variants";
import { BreadcrumbContext } from "./breadcrumb-context";

export type BreadcrumbRootProps = React.ComponentProps<"nav">;

export default function BreadcrumbRoot({
	className,
	...props
}: BreadcrumbRootProps) {
	const slots = breadcrumbVariants();

	return (
		<BreadcrumbContext value={{ slots }}>
			<nav
				data-slot="breadcrumb"
				aria-label="breadcrumb"
				className={cn(slots.root(), className)}
				{...props}
			/>
		</BreadcrumbContext>
	);
}
