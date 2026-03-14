export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

import { useFieldContext } from "./field.context";

export const FieldDescription = ({
	className,
	...props
}: FieldDescriptionProps) => {
	const { id, slots } = useFieldContext();
	return (
		<p
			id={`${id}-description`}
			className={slots.description({ class: className })}
			{...props}
		/>
	);
};
