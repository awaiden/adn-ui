import { Slider } from "radix-ui";

import { useSliderContext } from "./slider-context";

export type SliderTrackProps = React.ComponentProps<typeof Slider.Track>;

export default function SliderTrack({ className, ...props }: SliderTrackProps) {
	const { slots } = useSliderContext();

	return (
		<Slider.Track
			data-slot="slider-track"
			className={slots.track({ className })}
			{...props}
		/>
	);
}
