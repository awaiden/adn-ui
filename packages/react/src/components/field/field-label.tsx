import { useFieldContext } from "./field.context";

export type FieldLabelProps = React.HTMLAttributes<HTMLLabelElement>;

export const FieldLabel = ({
	className,
	children,
	...props
}: FieldLabelProps) => {
	const { slots, id } = useFieldContext();
	return (
		<label
			htmlFor={id}
			className={slots.label({ class: className })}
			{...props}
		>
			{children}
		</label>
	);
};
