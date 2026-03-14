import { Dialog } from "radix-ui";

export type DialogTriggerProps = React.ComponentProps<typeof Dialog.Trigger>;

export default function DialogTrigger(props: DialogTriggerProps) {
  return <Dialog.Trigger data-slot="dialog-trigger" {...props} />;
}
