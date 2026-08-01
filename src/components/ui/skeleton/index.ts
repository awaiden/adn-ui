import {
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonRoot,
  SkeletonText,
} from "./skeleton";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonContainer = {
  Avatar: SkeletonAvatar,
  Button: SkeletonButton,
  Card: SkeletonCard,
  Root: SkeletonRoot,
  Text: SkeletonText,
};

export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonCard, SkeletonRoot, SkeletonText };

export type {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonCardProps,
  SkeletonProps,
  SkeletonTextProps,
} from "./skeleton";

export { SkeletonContext, useSkeletonContext } from "./skeleton.context";
export { type SkeletonVariants, skeletonVariants } from "./skeleton.variants";
