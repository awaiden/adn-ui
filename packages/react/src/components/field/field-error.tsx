import { useFieldContext } from "./field.context";

export type FieldErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

export const FieldError = ({ className, ...props }: FieldErrorProps) => {
	const { slots, id } = useFieldContext();
	return (
		<p
			aria-describedby={`${id}-error`}
			className={slots.error({ class: className })}
			{...props}
		/>
	);
};
