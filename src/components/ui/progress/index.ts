import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from "./progress";

export const Progress = {
  Indicator: ProgressIndicator,
  Label: ProgressLabel,
  Root: ProgressRoot,
  Track: ProgressTrack,
  Value: ProgressValue,
};

export { ProgressIndicator, ProgressLabel, ProgressRoot, ProgressTrack, ProgressValue };

export type {
  ProgressIndicatorProps,
  ProgressLabelProps,
  ProgressProps,
  ProgressTrackProps,
  ProgressValueProps,
} from "./progress";
export { ProgressContext, useProgressContext } from "./progress.context";
export { type ProgressVariants, progressVariants } from "./progress.variants";
