import RadioGroupIndicator from "./radio-group-indicator";
import RadioGroupItem from "./radio-group-item";
import RadioGroupRoot from "./radio-group-root";

export const RadioGroup = {
	Indicator: RadioGroupIndicator,
	Item: RadioGroupItem,
	Root: RadioGroupRoot,
};

export { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator };

export type RadioGroupRootProps = React.ComponentProps<typeof RadioGroupRoot>;
export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupItem>;
export type RadioGroupIndicatorProps = React.ComponentProps<
	typeof RadioGroupIndicator
>;

export { type RadioGroupVariants, radioGroupVariants } from "@adn-ui/core";
