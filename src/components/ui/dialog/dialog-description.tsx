import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDialogContext } from "./dialog.context";

export type DialogDescriptionProps = React.ComponentProps<typeof Dialog.Description>;

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  const { slots } = useDialogContext();

  return <Dialog.Description className={cn(slots.description(), className)} {...props} />;
};
