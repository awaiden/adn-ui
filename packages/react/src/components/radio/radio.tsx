import { Radio as BaseRadio } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { RadioContext } from "./radio.context";
import { type RadioVariants, radioVariants } from "./radio.variants";
import { useRadioVariants } from "./use-radio";

// Root
export interface RadioRootProps extends RadioVariants, BaseRadio.Root.Props {}

export const RadioRoot = ({ className, ...props }: RadioRootProps) => {
  const slots = useMemo(() => radioVariants(), []);

  return (
    <RadioContext.Provider value={{ slots }}>
      <BaseRadio.Root
        className={cn(slots.root(), className)}
        {...props}
      />
    </RadioContext.Provider>
  );
};

// Indicator
export interface RadioIndicatorProps extends BaseRadio.Indicator.Props {}

export const RadioIndicator = ({ className, ...props }: RadioIndicatorProps) => {
  const { slots } = useRadioVariants();

  return (
    <BaseRadio.Indicator
      className={cn(slots.indicator(), className)}
      {...props}
    />
  );
};
