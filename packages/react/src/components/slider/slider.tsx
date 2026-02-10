import { Slider as BaseSlider } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { SliderContext } from "./slider.context";
import { type SliderVariants, sliderVariants } from "./slider.variants";
import { useSlider } from "./use-slider";

// Root
export interface SliderProps extends SliderVariants, BaseSlider.Root.Props {}

export const SliderRoot = ({ className, ...props }: SliderProps) => {
  const slots = useMemo(() => sliderVariants(), []);
  return (
    <SliderContext value={{ slots }}>
      <BaseSlider.Root
        className={cn(className, slots.root())}
        {...props}
      />
    </SliderContext>
  );
};

// Value
export const SliderValue = ({ className, ...props }: BaseSlider.Value.Props) => {
  const { slots } = useSlider();
  return (
    <BaseSlider.Value
      className={cn(className, slots.value())}
      {...props}
    />
  );
};

// Control
export const SliderControl = ({ className, ...props }: BaseSlider.Control.Props) => {
  const { slots } = useSlider();
  return (
    <BaseSlider.Control
      className={cn(className, slots.control())}
      {...props}
    />
  );
};

// Track
export const SliderTrack = ({ className, ...props }: BaseSlider.Track.Props) => {
  const { slots } = useSlider();
  return (
    <BaseSlider.Track
      className={cn(className, slots.track())}
      {...props}
    />
  );
};

// Indicator
export const SliderIndicator = ({ className, ...props }: BaseSlider.Indicator.Props) => {
  const { slots } = useSlider();
  return (
    <BaseSlider.Indicator
      className={cn(className, slots.indicator())}
      {...props}
    />
  );
};

// Thumb
export const SliderThumb = ({ className, ...props }: BaseSlider.Thumb.Props) => {
  const { slots } = useSlider();
  return (
    <BaseSlider.Thumb
      className={cn(className, slots.thumb())}
      {...props}
    />
  );
};

// Assign subcomponents
