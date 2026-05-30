import { PopoverContent } from "./popover-content";
import { PopoverRoot } from "./popover-root";
import { PopoverTrigger } from "./popover-trigger";

export const Popover = {
  Content: PopoverContent,
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
};

export { PopoverContent, PopoverRoot, PopoverTrigger };

export type { PopoverContentProps } from "./popover-content";

export type { PopoverRootProps } from "./popover-root";
export type { PopoverTriggerProps } from "./popover-trigger";
export { type PopoverVariants, popoverVariants } from "./popover.variants";
