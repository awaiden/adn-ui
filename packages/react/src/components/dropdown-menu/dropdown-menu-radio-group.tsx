import { DropdownMenu } from "radix-ui";

export type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenu.RadioGroup>;

export default function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
  return <DropdownMenu.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}
