import { AspectRatio } from "radix-ui";
import {
	type AspectRatioVariants,
	aspectRatioVariants,
} from "./aspect-ratio.variants";

export type AspectRatioProps = React.ComponentProps<typeof AspectRatio.Root> &
	AspectRatioVariants;

export default function AspectRatioRoot({
	className,
	...props
}: AspectRatioProps) {
	const styles = aspectRatioVariants({ className });

	return <AspectRatio.Root className={styles} {...props} />;
}
