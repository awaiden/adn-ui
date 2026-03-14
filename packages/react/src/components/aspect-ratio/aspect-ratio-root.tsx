import { type AspectRatioVariants, aspectRatioVariants } from "@adn-ui/core";
import { AspectRatio } from "radix-ui";

export type AspectRatioProps = React.ComponentProps<typeof AspectRatio.Root> &
	AspectRatioVariants;

export default function AspectRatioRoot({
	className,
	...props
}: AspectRatioProps) {
	const styles = aspectRatioVariants({ className });

	return <AspectRatio.Root className={styles} {...props} />;
}
