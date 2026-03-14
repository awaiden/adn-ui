import { type TextareaVariants, textareaVariants } from "@adn-ui/core";

export type TextareaProps = React.ComponentProps<"textarea"> & TextareaVariants;

export default function Textarea({ className, size, ...props }: TextareaProps) {
	const styles = textareaVariants({ className, size });

	return <textarea data-slot="textarea" className={styles} {...props} />;
}
