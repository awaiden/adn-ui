import { cn } from "tailwind-variants";
import { useCardContext } from "./card-context";

export type CardTitleProps = React.ComponentProps<"h2">;

export default function CardTitle({ className, ...props }: CardTitleProps) {
	const { slots } = useCardContext();

	return (
		<h2
			data-slot="card-title"
			className={cn(slots.title(), className)}
			{...props}
		/>
	);
}
