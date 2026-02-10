import type React from "react";

import { LucideLoader } from "lucide-react";
import { cn } from "tailwind-variants";

import { type SpinnerVariants, spinnerVariants } from "./spinner.variants";

// Root
export interface SpinnerProps extends SpinnerVariants, React.ComponentProps<"svg"> {
  asChild?: boolean;
}

export const Spinner = ({ className, size, variant, ...props }: SpinnerProps) => {
  const styles = spinnerVariants({ size, variant });

  return (
    <LucideLoader
      aria-label='Loading'
      className={cn(className, styles)}
      role='status'
      {...props}
    />
  );
};
