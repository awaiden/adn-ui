import { type InputVariants, inputVariants } from "@adn-ui/core";

export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
	InputVariants;

export default function Input({ className, size, ...props }: InputProps) {
	const styles = inputVariants({ className, size });

	return <input data-slot="input" className={styles} {...props} />;
}
