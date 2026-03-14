import { cn } from "tailwind-variants";

import { useCardContext } from "./card-context";

export type CardHeaderProps = React.ComponentProps<"h2">;

export default function CardHeader({ className, ...props }: CardHeaderProps) {
	const { slots } = useCardContext();

	return (
		<h2
			data-slot="card-header"
			className={cn(slots.header(), className)}
			{...props}
		/>
	);
}
