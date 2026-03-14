import { type SkeletonVariants, skeletonVariants } from "@adn-ui/core";

export type SkeletonProps = React.ComponentProps<"div"> & SkeletonVariants;

export default function Skeleton({ className, variant, ...props }: SkeletonProps) {
  const styles = skeletonVariants({ className, variant });

  return <div data-slot="skeleton" className={styles} {...props} />;
}
