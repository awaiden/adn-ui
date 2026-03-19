import AlertDescription from "./alert-description";
import AlertIcon from "./alert-icon";
import AlertRoot from "./alert-root";
import AlertTitle from "./alert-title";

export const Alert = {
  Description: AlertDescription,
  Icon: AlertIcon,
  Root: AlertRoot,
  Title: AlertTitle,
};

export { AlertRoot, AlertTitle, AlertDescription, AlertIcon };

export type AlertRootProps = React.ComponentProps<typeof AlertRoot>;
export type AlertTitleProps = React.ComponentProps<typeof AlertTitle>;
export type AlertDescriptionProps = React.ComponentProps<typeof AlertDescription>;

export { type AlertVariants, alertVariants } from "@adn-ui/core";
