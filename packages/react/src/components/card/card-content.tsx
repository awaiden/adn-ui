import { cn } from "tailwind-variants";

import { useCardContext } from "./card-context";

export type CardContentProps = React.ComponentProps<"div">;

export default function CardContent({ className, ...props }: CardContentProps) {
	const { slots } = useCardContext();
	return (
		<div
			data-slot="card-content"
			className={cn(slots.content(), className)}
			{...props}
		/>
	);
}
