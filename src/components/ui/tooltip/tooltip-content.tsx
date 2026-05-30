import { Tooltip } from "radix-ui";
import { cn } from "tailwind-variants";

import { tooltipVariants } from "./tooltip.variants";

export type TooltipContentProps = React.ComponentProps<typeof Tooltip.Content>;

export const TooltipContent = ({ className, sideOffset = 4, ...props }: TooltipContentProps) => {
  const { content } = tooltipVariants();

  return (
    <Tooltip.Portal>
      <Tooltip.Content className={cn(content(), className)} sideOffset={sideOffset} {...props} />
    </Tooltip.Portal>
  );
};
