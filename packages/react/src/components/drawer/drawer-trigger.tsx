import { Dialog } from "radix-ui";

export type DrawerTriggerProps = React.ComponentProps<typeof Dialog.Trigger>;

export default function DrawerTrigger(props: DrawerTriggerProps) {
  return <Dialog.Trigger data-slot="drawer-trigger" {...props} />;
}
