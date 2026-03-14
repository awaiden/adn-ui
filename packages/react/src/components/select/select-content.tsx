import { ChevronDown, ChevronUp } from "lucide-react";
import { Select } from "radix-ui";
import { cn } from "tailwind-variants";

import { useSelectContext } from "./select-context";

export type SelectContentProps = React.ComponentProps<typeof Select.Content>;

export default function SelectContent({
	children,
	className,
	position = "popper",
	...props
}: SelectContentProps) {
	const { slots } = useSelectContext();

	return (
		<Select.Portal>
			<Select.Content
				data-slot="select-content"
				className={cn(slots.content(), className)}
				position={position}
				sideOffset={4}
				{...props}
			>
				<Select.ScrollUpButton className={slots.scrollButton()}>
					<ChevronUp className="size-4" />
				</Select.ScrollUpButton>
				<Select.Viewport
					data-slot="select-viewport"
					className={cn(
						slots.viewport(),
						position === "popper" &&
							"h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)",
					)}
				>
					{children}
				</Select.Viewport>
				<Select.ScrollDownButton className={slots.scrollButton()}>
					<ChevronDown className="size-4" />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	);
}
