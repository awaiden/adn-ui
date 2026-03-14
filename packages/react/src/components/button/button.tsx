import { type ButtonVariants, buttonVariants } from "@adn-ui/core";

export type ButtonProps = React.ComponentProps<"button"> & ButtonVariants;

export default function Button({
	className,
	size,
	variant,
	...props
}: ButtonProps) {
	const styles = buttonVariants({ className, size, variant });

	return <button type="button" className={styles} {...props} />;
}
