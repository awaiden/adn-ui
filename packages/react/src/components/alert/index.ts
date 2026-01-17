import { AlertContent, AlertDescription, AlertIndicator, AlertRoot, AlertTitle } from "./alert";

export type {
  AlertContentProps,
  AlertDescriptionProps,
  AlertIndicatorProps,
  AlertProps,
  AlertTitleProps,
} from "./alert";

export const Alert = Object.assign(AlertRoot, {
  Content: AlertContent,
  Description: AlertDescription,
  Indicator: AlertIndicator,
  Root: AlertRoot,
  Title: AlertTitle,
});

export * from "./alert";

export type { AlertVariants } from "./alert.variants";
export { alertVariants } from "./alert.variants";
