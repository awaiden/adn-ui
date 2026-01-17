"use client";

import { Meter as BaseMeter } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { MeterContext } from "./meter.context";
import { type MeterVariants, meterVariants } from "./meter.variants";
import { useMeter } from "./use-meter";

// Root
export interface MeterProps extends MeterVariants, BaseMeter.Root.Props {}

export const MeterRoot = ({ className, size, variant, ...props }: MeterProps) => {
  const slots = useMemo(() => meterVariants({ size, variant }), [size, variant]);

  return (
    <MeterContext value={{ slots }}>
      <BaseMeter.Root className={cn(className, slots.root())} {...props} />
    </MeterContext>
  );
};

// Label
export interface MeterLabelProps extends BaseMeter.Label.Props {}

export const MeterLabel = ({ className, ...props }: MeterLabelProps) => {
  const { slots } = useMeter();

  return <BaseMeter.Label className={cn(className, slots.label())} {...props} />;
};

// Value
export interface MeterValueProps extends BaseMeter.Value.Props {}

export const MeterValue = ({ className, ...props }: MeterValueProps) => {
  const { slots } = useMeter();

  return <BaseMeter.Value className={cn(className, slots.value())} {...props} />;
};

// Track
export interface MeterTrackProps extends BaseMeter.Track.Props {}

export const MeterTrack = ({ className, ...props }: MeterTrackProps) => {
  const { slots } = useMeter();
  return <BaseMeter.Track className={cn(className, slots.track())} {...props} />;
};

// Indicator
export interface MeterIndicatorProps extends BaseMeter.Indicator.Props {}

export const MeterIndicator = ({ className, ...props }: MeterIndicatorProps) => {
  const { slots } = useMeter();
  return <BaseMeter.Indicator className={cn(className, slots.indicator())} {...props} />;
};
