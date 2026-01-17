"use client";

import { Progress as BaseProgress } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { ProgressContext } from "./progress.context";
import { type ProgressVariants, progressVariants } from "./progress.variants";
import { useProgress } from "./use-progress";

// Root
export interface ProgressProps extends ProgressVariants, BaseProgress.Root.Props {}

export const ProgressRoot = ({ className, variant, size, ...props }: ProgressProps) => {
  const slots = useMemo(() => progressVariants({ size, variant }), [variant, size]);

  return (
    <ProgressContext value={{ slots }}>
      <BaseProgress.Root className={cn(className, slots.root())} {...props} />
    </ProgressContext>
  );
};

// Label
export interface ProgressLabelProps extends BaseProgress.Label.Props {}

export const ProgressLabel = ({ className, ...props }: ProgressLabelProps) => {
  const { slots } = useProgress();
  return <BaseProgress.Label className={cn(className, slots.label())} {...props} />;
};

// Value
export interface ProgressValueProps extends BaseProgress.Value.Props {}
export const ProgressValue = ({ className, ...props }: ProgressValueProps) => {
  const { slots } = useProgress();
  return <BaseProgress.Value className={cn(className, slots.value())} {...props} />;
};

// Track
export interface ProgressTrackProps extends BaseProgress.Track.Props {}
export const ProgressTrack = ({ className, ...props }: ProgressTrackProps) => {
  const { slots } = useProgress();
  return <BaseProgress.Track className={cn(className, slots.track())} {...props} />;
};

// Indicator
export interface ProgressIndicatorProps extends BaseProgress.Indicator.Props {}
export const ProgressIndicator = ({ className, ...props }: ProgressIndicatorProps) => {
  const { slots } = useProgress();
  return <BaseProgress.Indicator className={cn(className, slots.indicator())} {...props} />;
};

// Exports
