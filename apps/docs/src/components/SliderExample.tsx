"use client";

import { Slider } from "@adn-ui/react";

const Default = () => (
	<Slider.Root defaultValue={[50]} max={100} step={1} className="w-[300px]">
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
	</Slider.Root>
);

const Range = () => (
	<Slider.Root defaultValue={[25, 75]} max={100} step={1} className="w-[300px]">
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb />
		<Slider.Thumb />
	</Slider.Root>
);

const Vertical = () => (
	<div className="flex items-center justify-center h-[200px]">
		<Slider.Root defaultValue={[50]} max={100} step={1} orientation="vertical">
			<Slider.Track>
				<Slider.Range />
			</Slider.Track>
			<Slider.Thumb />
		</Slider.Root>
	</div>
);

export const SliderExample = {
	Default,
	Range,
	Vertical,
};
