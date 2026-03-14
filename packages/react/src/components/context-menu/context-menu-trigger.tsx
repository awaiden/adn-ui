import { ContextMenu } from "radix-ui";

export type ContextMenuTriggerProps = React.ComponentProps<typeof ContextMenu.Trigger>;

export default function ContextMenuTrigger(props: ContextMenuTriggerProps) {
  return <ContextMenu.Trigger data-slot="context-menu-trigger" {...props} />;
}
