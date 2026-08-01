"use client";

import "./skeleton.css";
import type React from "react";
import { cn } from "tailwind-variants";

import { SkeletonContext, useSkeletonContext } from "./skeleton.context";
import { skeletonVariants, type SkeletonVariants } from "./skeleton.variants";

export type SkeletonProps = SkeletonVariants & React.HTMLAttributes<HTMLDivElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonRoot = ({
  children,
  className,
  variant,
  animation,
  shape,
  size,
  ...props
}: SkeletonProps) => {
  const slots = skeletonVariants({ variant, animation, shape, size });

  return (
    <SkeletonContext.Provider value={{ slots }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </SkeletonContext.Provider>
  );
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const Skeleton = SkeletonRoot;

export type SkeletonTextProps = SkeletonProps & {
  lines?: number;
  lastLineWidth?: string;
  gap?: string;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonText = ({
  lines = 3,
  lastLineWidth = "60%",
  className,
  variant,
  animation,
  shape = "rounded",
  size = "sm",
  ...props
}: SkeletonTextProps) => {
  const { slots } = useSkeletonContext();

  return (
    <div className={cn(slots.text(), className)} {...props}>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonRoot
          key={index}
          variant={variant}
          animation={animation}
          shape={shape}
          size={size}
          style={index === lines - 1 && lastLineWidth ? { width: lastLineWidth } : undefined}
          className="w-full"
        />
      ))}
    </div>
  );
};

export type SkeletonAvatarProps = SkeletonProps;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonAvatar = ({
  className,
  variant,
  animation,
  shape = "circle",
  size = "md",
  ...props
}: SkeletonAvatarProps) => {
  const sizeClasses = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const chosenSizeClass = sizeClasses[size as keyof typeof sizeClasses] || "h-10 w-10";

  return (
    <SkeletonRoot
      variant={variant}
      animation={animation}
      shape={shape}
      className={cn(chosenSizeClass, "shrink-0", className)}
      {...props}
    />
  );
};

export type SkeletonButtonProps = SkeletonProps;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonButton = ({
  className,
  variant,
  animation,
  shape = "rounded",
  size = "md",
  ...props
}: SkeletonButtonProps) => {
  const sizeClasses = {
    xs: "h-7 w-16",
    sm: "h-8 w-20",
    md: "h-10 w-24",
    lg: "h-11 w-28",
    xl: "h-12 w-32",
  };

  const chosenSizeClass = sizeClasses[size as keyof typeof sizeClasses] || "h-10 w-24";

  return (
    <SkeletonRoot
      variant={variant}
      animation={animation}
      shape={shape}
      className={cn(chosenSizeClass, className)}
      {...props}
    />
  );
};

export type SkeletonCardProps = SkeletonProps;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/skeleton/content.md
 */
export const SkeletonCard = ({
  className,
  variant,
  animation,
  shape,
  ...props
}: SkeletonCardProps) => {
  const { slots } = useSkeletonContext();

  return (
    <div className={cn(slots.card(), className)} {...props}>
      <div className="flex items-center gap-3">
        <SkeletonAvatar variant={variant} animation={animation} shape={shape} size="md" />
        <div className="flex-1 space-y-2">
          <SkeletonRoot
            variant={variant}
            animation={animation}
            shape={shape}
            size="sm"
            className="w-1/2"
          />
          <SkeletonRoot
            variant={variant}
            animation={animation}
            shape={shape}
            size="xs"
            className="w-1/3"
          />
        </div>
      </div>
      <SkeletonRoot
        variant={variant}
        animation={animation}
        shape={shape}
        className="h-32 w-full rounded-lg"
      />
      <SkeletonText
        variant={variant}
        animation={animation}
        shape={shape}
        lines={2}
        lastLineWidth="80%"
      />
    </div>
  );
};
