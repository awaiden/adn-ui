import { type SliderVariants, sliderVariants } from "@adn-ui/core";
import { Slider } from "radix-ui";

import { SliderContext } from "./slider-context";

export type SliderRootProps = React.ComponentProps<typeof Slider.Root> &
	SliderVariants;

export default function SliderRoot({
	className,
	size,
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
