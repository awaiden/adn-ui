import { DropdownMenu } from "radix-ui";

export type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenu.Trigger>;

export default function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <DropdownMenu.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
