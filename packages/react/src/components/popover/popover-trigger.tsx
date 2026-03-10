import { Popover } from "radix-ui";

export type PopoverTriggerProps = React.ComponentProps<typeof Popover.Trigger>;

export default function PopoverTrigger(props: PopoverTriggerProps) {
	return <Popover.Trigger data-slot="popover-trigger" {...props} />;
}
