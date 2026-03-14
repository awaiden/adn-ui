import { type ButtonVariants, buttonVariants } from "@adn-ui/core";

export type ButtonProps = React.ComponentProps<"button"> & ButtonVariants;

export default function Button({
	variant,
	size,
	className,
	...props
}: ButtonProps) {
	const styles = buttonVariants({ variant, size, className });

	return <button type="button" className={styles} {...props} />;
}
