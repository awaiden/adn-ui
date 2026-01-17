"use client";

import { cn } from "tailwind-variants";

import { type LabelVariants, labelVariants } from "./label.variants";

export interface LabelProps extends LabelVariants, React.ComponentProps<"label"> {}

export const Label = ({ className, ...props }: LabelProps) => {
  const styles = labelVariants();

  // biome-ignore lint/a11y/noLabelWithoutControl: <label> is used as a generic label component
  return <label className={cn(className, styles)} {...props} />;
};
