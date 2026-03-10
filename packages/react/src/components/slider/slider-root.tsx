import { Slider } from "radix-ui";
import { type SliderVariants, sliderVariants } from "./slider.variants";
import { SliderContext } from "./slider-context";

export type SliderRootProps = React.ComponentProps<typeof Slider.Root> &
	SliderVariants;

export default function SliderRoot({
	size,
	className,
	...props
}: SliderRootProps) {
	const slots = sliderVariants({ size });

	return (
		<SliderContext value={{ slots }}>
			<Slider.Root
				data-slot="slider"
				className={slots.root({ className })}
				{...props}
			/>
		</SliderContext>
	);
}
