import { ContextMenu } from "radix-ui";

export type ContextMenuSubProps = React.ComponentProps<typeof ContextMenu.Sub>;

export default function ContextMenuSub(props: ContextMenuSubProps) {
  return <ContextMenu.Sub data-slot="context-menu-sub" {...props} />;
}
