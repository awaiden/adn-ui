import "./popover.css";

import { Popover } from "radix-ui";

export type PopoverRootProps = React.ComponentProps<typeof Popover.Root>;

export const PopoverRoot = (props: PopoverRootProps) => {
  return <Popover.Root {...props} />;
};
