import "./progress.css";

import { Progress } from "radix-ui";
import { cn } from "tailwind-variants";

import { progressVariants } from "./progress.variants";

export type ProgressProps = React.ComponentProps<typeof Progress.Root>;

export const ProgressRoot = ({ className, value, ...props }: ProgressProps) => {
  const { indicator, root } = progressVariants();

  return (
    <Progress.Root className={cn(root(), className)} value={value} {...props}>
      <Progress.Indicator
        className={indicator()}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </Progress.Root>
  );
};
