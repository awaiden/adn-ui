import {
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValue,
} from "./progress";

export const Progress = Object.assign(ProgressRoot, {
  Indicator: ProgressIndicator,
  Label: ProgressLabel,
  Root: ProgressRoot,
  Track: ProgressTrack,
  Value: ProgressValue,
});

export * from "./progress";

export type { ProgressVariants } from "./progress.variants";
export { progressVariants } from "./progress.variants";
