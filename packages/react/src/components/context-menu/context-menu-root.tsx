import { contextMenuVariants } from "@adn-ui/core";
import { ContextMenu } from "radix-ui";

import { ContextMenuContext } from "./context-menu-context";

export type ContextMenuRootProps = React.ComponentProps<typeof ContextMenu.Root>;

export default function ContextMenuRoot(props: ContextMenuRootProps) {
  const slots = contextMenuVariants();

  return (
    <ContextMenuContext value={{ slots }}>
      <ContextMenu.Root data-slot="context-menu-root" {...props} />
    </ContextMenuContext>
  );
}
