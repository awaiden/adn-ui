import { Slider } from "radix-ui";
import { useSliderContext } from "./slider-context";

export type SliderRangeProps = React.ComponentProps<typeof Slider.Range>;

export default function SliderRange({ className, ...props }: SliderRangeProps) {
	const { slots } = useSliderContext();

	return (
		<Slider.Range
			data-slot="slider-range"
			className={slots.range({ className })}
			{...props}
		/>
	);
}
