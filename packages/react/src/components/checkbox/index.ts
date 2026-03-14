import CheckboxIndicator from "./checkbox-indicator";
import CheckboxRoot from "./checkbox-root";

export const Checkbox = {
	Indicator: CheckboxIndicator,
	Root: CheckboxRoot,
};

export { CheckboxRoot, CheckboxIndicator };

export type CheckboxRootProps = React.ComponentProps<typeof CheckboxRoot>;
export type CheckboxIndicatorProps = React.ComponentProps<
	typeof CheckboxIndicator
>;

export { type CheckboxVariants, checkboxVariants } from "@adn-ui/core";
