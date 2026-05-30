import "./context-menu.css";

import { ContextMenu } from "radix-ui";

import { ContextMenuContext } from "./context-menu.context";
import { contextMenuVariants } from "./context-menu.variants";

export type ContextMenuRootProps = React.ComponentProps<typeof ContextMenu.Root>;

export const ContextMenuRoot = (props: ContextMenuRootProps) => {
  const slots = contextMenuVariants();

  return (
    <ContextMenuContext value={{ slots }}>
      <ContextMenu.Root {...props} />
    </ContextMenuContext>
  );
};
