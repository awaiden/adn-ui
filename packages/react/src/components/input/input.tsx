import { type InputVariants, inputVariants } from "@adn-ui/core";

export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
	InputVariants;

export default function Input({ size, className, ...props }: InputProps) {
	const styles = inputVariants({ size, className });

	return <input data-slot="input" className={styles} {...props} />;
}
