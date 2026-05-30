import { ContextMenu } from "radix-ui";

export type ContextMenuTriggerProps = React.ComponentProps<typeof ContextMenu.Trigger>;

export const ContextMenuTrigger = (props: ContextMenuTriggerProps) => {
  return <ContextMenu.Trigger {...props} />;
};
