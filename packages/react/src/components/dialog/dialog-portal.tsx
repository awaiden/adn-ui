import { Dialog } from "radix-ui";

export type DialogPortalProps = React.ComponentProps<typeof Dialog.Portal>;

export default function DialogPortal(props: DialogPortalProps) {
	return <Dialog.Portal {...props} />;
}
