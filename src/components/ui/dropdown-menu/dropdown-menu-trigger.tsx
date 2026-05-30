import { DropdownMenu } from "radix-ui";

export type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenu.Trigger>;

export const DropdownMenuTrigger = (props: DropdownMenuTriggerProps) => {
  return <DropdownMenu.Trigger asChild {...props} />;
};
