import { Popover } from "radix-ui";

export type PopoverAnchorProps = React.ComponentProps<typeof Popover.Anchor>;

export default function PopoverAnchor(props: PopoverAnchorProps) {
  return <Popover.Anchor data-slot="popover-anchor" {...props} />;
}
