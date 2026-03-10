import { type SkeletonVariants, skeletonVariants } from "./skeleton.variants";

export type SkeletonProps = React.ComponentProps<"div"> & SkeletonVariants;

export default function Skeleton({
	variant,
	className,
	...props
}: SkeletonProps) {
	const styles = skeletonVariants({ variant, className });

	return <div data-slot="skeleton" className={styles} {...props} />;
}
