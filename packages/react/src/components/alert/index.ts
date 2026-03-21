import AlertContent from "./alert-content";
import AlertDescription from "./alert-description";
import AlertIcon from "./alert-icon";
import AlertRoot from "./alert-root";
import AlertTitle from "./alert-title";

export const Alert = {
  Content: AlertContent,
  Description: AlertDescription,
  Icon: AlertIcon,
  Root: AlertRoot,
  Title: AlertTitle,
};

export { AlertRoot, AlertTitle, AlertDescription, AlertIcon, AlertContent };

export type AlertRootProps = React.ComponentProps<typeof AlertRoot>;
export type AlertTitleProps = React.ComponentProps<typeof AlertTitle>;
export type AlertDescriptionProps = React.ComponentProps<typeof AlertDescription>;
export type AlertContentProps = React.ComponentProps<typeof AlertContent>;

export { type AlertVariants, alertVariants } from "@adn-ui/core";
