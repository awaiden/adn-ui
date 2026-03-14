import ProgressIndicator from "./progress-indicator";
import ProgressRoot from "./progress-root";

export const Progress = {
	Root: ProgressRoot,
	Indicator: ProgressIndicator,
};

export { ProgressRoot, ProgressIndicator };

export type ProgressRootProps = React.ComponentProps<typeof ProgressRoot>;
export type ProgressIndicatorProps = React.ComponentProps<
	typeof ProgressIndicator
>;

export { type ProgressVariants, progressVariants } from "@adn-ui/core";
