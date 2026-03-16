import { cn } from "@adn-ui/core";
import { Dialog } from "radix-ui";

import { useDialogContext } from "./dialog-context";

export type DialogDescriptionProps = React.ComponentProps<typeof Dialog.Description>;

export default function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  const { slots } = useDialogContext();

  return (
    <Dialog.Description
      data-slot="dialog-description"
      className={cn(slots.description(), className)}
      {...props}
    />
  );
}
