import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDialogContext } from "./dialog.context";

export type DialogTitleProps = React.ComponentProps<typeof Dialog.Title>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  const { slots } = useDialogContext();

  return <Dialog.Title className={cn(slots.title(), className)} {...props} />;
};
