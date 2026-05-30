import "./slider.css";

import { Slider } from "radix-ui";
import { cn } from "tailwind-variants";

import { sliderVariants } from "./slider.variants";

export type SliderProps = React.ComponentProps<typeof Slider.Root>;

export const SliderRoot = ({ className, ...props }: SliderProps) => {
  const { range, root, thumb, track } = sliderVariants();

  return (
    <Slider.Root className={cn(root(), className)} {...props}>
      <Slider.Track className={track()}>
        <Slider.Range className={range()} />
      </Slider.Track>
      <Slider.Thumb className={thumb()} />
    </Slider.Root>
  );
};
