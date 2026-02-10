import { cn } from "tailwind-variants";

import { type ChipVariants, chipVariants } from "./chip.variants";

// Root
export interface ChipProps extends ChipVariants, React.ComponentProps<"span"> {}

export const Chip = ({ className, variant, size, ...props }: ChipProps) => {
  const styles = chipVariants({ size, variant });
  return (
    <span
      className={cn(className, styles)}
      {...props}
    />
  );
};
