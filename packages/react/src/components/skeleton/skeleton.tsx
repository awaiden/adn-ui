import { cn } from "tailwind-variants";

import { type SkeletonVariants, skeletonVariants } from "./skeleton.variants";

// Root
interface SkeletonProps extends SkeletonVariants, React.ComponentProps<"div"> {}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  const styles = skeletonVariants();
  return (
    <div
      className={cn(className, styles)}
      {...props}
    />
  );
};

export default Skeleton;
