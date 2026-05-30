import { Dialog } from "radix-ui";

export type DialogTriggerProps = React.ComponentProps<typeof Dialog.Trigger>;

export const DialogTrigger = (props: DialogTriggerProps) => {
  return <Dialog.Trigger asChild {...props} />;
};
