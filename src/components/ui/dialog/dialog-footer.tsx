import { cn } from "tailwind-variants";

import { useDialogContext } from "./dialog.context";

export type DialogFooterProps = React.ComponentProps<"div">;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  const { slots } = useDialogContext();

  return <div className={cn(slots.footer(), className)} {...props} />;
};
