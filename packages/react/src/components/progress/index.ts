import ProgressIndicator from "./progress-indicator";
import ProgressRoot from "./progress-root";

export const Progress = {
	Indicator: ProgressIndicator,
	Root: ProgressRoot,
};

export { ProgressRoot, ProgressIndicator };

export type ProgressRootProps = React.ComponentProps<typeof ProgressRoot>;
export type ProgressIndicatorProps = React.ComponentProps<
	typeof ProgressIndicator
>;

export { type ProgressVariants, progressVariants } from "@adn-ui/core";
