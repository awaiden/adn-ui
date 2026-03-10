import AlertDescription from "./alert-description";
import AlertRoot from "./alert-root";
import AlertTitle from "./alert-title";

export const Alert = {
	Root: AlertRoot,
	Title: AlertTitle,
	Description: AlertDescription,
};

export { AlertRoot, AlertTitle, AlertDescription };

export type AlertRootProps = React.ComponentProps<typeof AlertRoot>;
export type AlertTitleProps = React.ComponentProps<typeof AlertTitle>;
export type AlertDescriptionProps = React.ComponentProps<
	typeof AlertDescription
>;

export { type AlertVariants, alertVariants } from "./alert.variants";
