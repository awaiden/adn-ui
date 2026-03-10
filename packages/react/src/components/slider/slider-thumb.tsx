import { Slider } from "radix-ui";
import { useSliderContext } from "./slider-context";

export type SliderThumbProps = React.ComponentProps<typeof Slider.Thumb>;

export default function SliderThumb({ className, ...props }: SliderThumbProps) {
	const { slots } = useSliderContext();

	return (
		<Slider.Thumb
			data-slot="slider-thumb"
			className={slots.thumb({ className })}
			{...props}
		/>
	);
}
