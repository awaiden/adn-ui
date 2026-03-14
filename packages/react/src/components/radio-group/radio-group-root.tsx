import { radioGroupVariants } from "@adn-ui/core";
import { RadioGroup } from "radix-ui";
import { cn } from "tailwind-variants";
import { RadioGroupContext } from "./radio-group-context";

export type RadioGroupRootProps = React.ComponentProps<typeof RadioGroup.Root>;

export default function RadioGroupRoot({
	className,
	...props
}: RadioGroupRootProps) {
	const slots = radioGroupVariants();

	return (
		<RadioGroupContext value={{ slots }}>
			<RadioGroup.Root
				data-slot="radio-group-root"
				className={cn(slots.root(), className)}
				{...props}
			/>
		</RadioGroupContext>
	);
}
