import "./tooltip.css";

import { Tooltip } from "radix-ui";

export type TooltipRootProps = React.ComponentProps<typeof Tooltip.Root>;

export const TooltipRoot = (props: TooltipRootProps) => {
  return <Tooltip.Root {...props} />;
};
