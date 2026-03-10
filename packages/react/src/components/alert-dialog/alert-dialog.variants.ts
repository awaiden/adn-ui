import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogVariants = tv({
	slots: {
		overlay: "alert-dialog__overlay",
		content: "alert-dialog__content",
		header: "alert-dialog__header",
		footer: "alert-dialog__footer",
		title: "alert-dialog__title",
		description: "alert-dialog__description",
		action: "alert-dialog__action",
		cancel: "alert-dialog__cancel",
	},
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>;
