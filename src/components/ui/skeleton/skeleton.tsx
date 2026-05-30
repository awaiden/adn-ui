import "./skeleton.css";

import { cn } from "tailwind-variants";

import { skeletonVariants, type SkeletonVariants } from "./skeleton.variants";

export type SkeletonProps = React.ComponentProps<"div"> & SkeletonVariants;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={cn(skeletonVariants(), className)} {...props} />;
};
