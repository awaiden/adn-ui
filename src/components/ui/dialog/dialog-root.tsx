import "./dialog.css";

import { Dialog } from "radix-ui";

import { DialogContext } from "./dialog.context";
import { dialogVariants } from "./dialog.variants";

export type DialogRootProps = React.ComponentProps<typeof Dialog.Root>;

export const DialogRoot = (props: DialogRootProps) => {
  const slots = dialogVariants();

  return (
    <DialogContext value={{ slots }}>
      <Dialog.Root {...props} />
    </DialogContext>
  );
};
