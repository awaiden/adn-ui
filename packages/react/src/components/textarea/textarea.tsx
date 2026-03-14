import { type TextareaVariants, textareaVariants } from "@adn-ui/core";

export type TextareaProps = React.ComponentProps<"textarea"> & TextareaVariants;

export default function Textarea({ size, className, ...props }: TextareaProps) {
	const styles = textareaVariants({ size, className });

	return <textarea data-slot="textarea" className={styles} {...props} />;
}
