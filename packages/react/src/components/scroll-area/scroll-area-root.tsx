import { ScrollArea } from "radix-ui";
import { cn } from "tailwind-variants";
import { scrollAreaVariants } from "./scroll-area.variants";
import { ScrollAreaContext } from "./scroll-area-context";

export type ScrollAreaRootProps = React.ComponentProps<typeof ScrollArea.Root>;

export default function ScrollAreaRoot({
	className,
	...props
}: ScrollAreaRootProps) {
	const slots = scrollAreaVariants();

	return (
		<ScrollAreaContext value={{ slots }}>
			<ScrollArea.Root
				data-slot="scroll-area-root"
				className={cn(slots.root(), className)}
				{...props}
			/>
		</ScrollAreaContext>
	);
}
