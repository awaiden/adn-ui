import { Tooltip } from "radix-ui";

export type TooltipTriggerProps = React.ComponentProps<typeof Tooltip.Trigger>;

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  return <Tooltip.Trigger asChild {...props} />;
};
