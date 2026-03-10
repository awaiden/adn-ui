import { useId } from "react";
import { FieldContext } from "./field.context";
import { type FieldVariants, fieldVariants } from "./field.variants";

export type FieldRootProps = React.HTMLAttributes<HTMLDivElement> &
	FieldVariants;

export const FieldRoot = ({
	className,
	id,
	orientation,
	...props
}: FieldRootProps) => {
	const generatedId = useId();

	const slots = fieldVariants({ orientation });

	return (
		<FieldContext.Provider value={{ slots, id: id || generatedId }}>
			<div className={slots.root({ class: className })} {...props} />
		</FieldContext.Provider>
	);
};
