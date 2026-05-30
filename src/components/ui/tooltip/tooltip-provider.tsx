import { Tooltip } from "radix-ui";

export type TooltipProviderProps = React.ComponentProps<typeof Tooltip.Provider>;

export const TooltipProvider = (props: TooltipProviderProps) => {
  return <Tooltip.Provider {...props} />;
};
