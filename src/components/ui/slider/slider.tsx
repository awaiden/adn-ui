"use client";

import "./slider.css";
import { Slider as BaseSlider } from "@base-ui/react/slider";
import type React from "react";
import { cn } from "@/lib/cn";

import { SliderContext, useSliderContext } from "./slider.context";
import { sliderVariants, type SliderVariants } from "./slider.variants";

export type SliderProps = SliderVariants & React.ComponentProps<typeof BaseSlider.Root>;

export const SliderRoot = ({ children, className, size, ...props }: SliderProps) => {
  const slots = sliderVariants({ size });

  return (
    <SliderContext.Provider value={{ slots }}>
      <BaseSlider.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseSlider.Root>
    </SliderContext.Provider>
  );
};

export type SliderLabelProps = React.ComponentProps<typeof BaseSlider.Label>;

export const SliderLabel = ({ className, ...props }: SliderLabelProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Label className={cn(slots.label(), className)} {...props} />;
};

export type SliderValueProps = React.ComponentProps<typeof BaseSlider.Value>;

export const SliderValue = ({ className, ...props }: SliderValueProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Value className={cn(slots.value(), className)} {...props} />;
};

export type SliderControlProps = React.ComponentProps<typeof BaseSlider.Control>;

export const SliderControl = ({ className, ...props }: SliderControlProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Control className={cn(slots.control(), className)} {...props} />;
};

export type SliderTrackProps = React.ComponentProps<typeof BaseSlider.Track>;

export const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Track className={cn(slots.track(), className)} {...props} />;
};

export type SliderIndicatorProps = React.ComponentProps<typeof BaseSlider.Indicator>;

export const SliderIndicator = ({ className, ...props }: SliderIndicatorProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Indicator className={cn(slots.indicator(), className)} {...props} />;
};

export type SliderThumbProps = React.ComponentProps<typeof BaseSlider.Thumb>;

export const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  const { slots } = useSliderContext();
  return <BaseSlider.Thumb className={cn(slots.thumb(), className)} {...props} />;
};
