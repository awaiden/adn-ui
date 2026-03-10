import { Checkbox } from "radix-ui";
import { type CheckboxVariants, checkboxVariants } from "./checkbox.variants";
import { CheckboxContext } from "./checkbox-context";

export type CheckboxRootProps = React.ComponentProps<typeof Checkbox.Root> &
	CheckboxVariants;

export default function CheckboxRoot({
	size,
	className,
	...props
}: CheckboxRootProps) {
	const slots = checkboxVariants({ size });

	return (
		<CheckboxContext value={{ slots }}>
			<Checkbox.Root className={slots.root({ className })} {...props} />
		</CheckboxContext>
	);
}
