import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from "./progress";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/progress/content.md
 */
export const Progress = Object.assign(ProgressRoot, {
  Indicator: ProgressIndicator,
  Label: ProgressLabel,
  Root: ProgressRoot,
  Track: ProgressTrack,
  Value: ProgressValue,
  indicator: ProgressIndicator,
  label: ProgressLabel,
  root: ProgressRoot,
  track: ProgressTrack,
  value: ProgressValue,
});

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
