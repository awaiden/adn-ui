import SliderRange from "./slider-range";
import SliderRoot from "./slider-root";
import SliderThumb from "./slider-thumb";
import SliderTrack from "./slider-track";

export const Slider = {
	Root: SliderRoot,
	Track: SliderTrack,
	Range: SliderRange,
	Thumb: SliderThumb,
};

export { SliderRoot, SliderTrack, SliderRange, SliderThumb };

export type SliderRootProps = React.ComponentProps<typeof SliderRoot>;
export type SliderTrackProps = React.ComponentProps<typeof SliderTrack>;
export type SliderRangeProps = React.ComponentProps<typeof SliderRange>;
export type SliderThumbProps = React.ComponentProps<typeof SliderThumb>;

export { type SliderVariants, sliderVariants } from "@adn-ui/core";
