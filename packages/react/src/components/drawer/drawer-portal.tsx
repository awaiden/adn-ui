import { Dialog } from "radix-ui";

export type DrawerPortalProps = React.ComponentProps<typeof Dialog.Portal>;

export default function DrawerPortal(props: DrawerPortalProps) {
  return <Dialog.Portal {...props} />;
}
