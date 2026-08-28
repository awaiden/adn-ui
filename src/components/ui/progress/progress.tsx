"use client";

import "./progress.css";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import type React from "react";
import { cn } from "@/lib/cn";

import { ProgressContext, useProgressContext } from "./progress.context";
import { progressVariants, type ProgressVariants } from "./progress.variants";

export type ProgressProps = ProgressVariants & React.ComponentProps<typeof BaseProgress.Root>;

export const ProgressRoot = ({ children, className, size, ...props }: ProgressProps) => {
  const slots = progressVariants({ size });

  return (
    <ProgressContext.Provider value={{ slots }}>
      <BaseProgress.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseProgress.Root>
    </ProgressContext.Provider>
  );
};

export type ProgressTrackProps = React.ComponentProps<typeof BaseProgress.Track>;

export const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  const { slots } = useProgressContext();
  return <BaseProgress.Track className={cn(slots.track(), className)} {...props} />;
};

export type ProgressIndicatorProps = React.ComponentProps<typeof BaseProgress.Indicator>;

export const ProgressIndicator = ({ className, ...props }: ProgressIndicatorProps) => {
  const { slots } = useProgressContext();
  return <BaseProgress.Indicator className={cn(slots.indicator(), className)} {...props} />;
};

export type ProgressLabelProps = React.ComponentProps<typeof BaseProgress.Label>;

export const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
  const { slots } = useProgressContext();
  return <BaseProgress.Label className={cn(slots.label(), className)} {...props} />;
};

export type ProgressValueProps = React.ComponentProps<typeof BaseProgress.Value>;

export const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  const { slots } = useProgressContext();
  return <BaseProgress.Value className={cn(slots.value(), className)} {...props} />;
};
