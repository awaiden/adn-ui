import { Popover } from "radix-ui";

export type PopoverTriggerProps = React.ComponentProps<typeof Popover.Trigger>;

export const PopoverTrigger = (props: PopoverTriggerProps) => {
  return <Popover.Trigger asChild {...props} />;
};
