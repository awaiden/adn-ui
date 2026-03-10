import { type LabelVariants, labelVariants } from "./label.variants";

export type LabelProps = React.ComponentProps<"label"> & LabelVariants;

export default function Label({ size, className, ...props }: LabelProps) {
	const styles = labelVariants({ size, className });

	// biome-ignore lint/a11y/noLabelWithoutControl: This component is meant to be used as a label for form controls, and the htmlFor prop can be used to associate it with an input.
	return <label className={styles} {...props} />;
}
