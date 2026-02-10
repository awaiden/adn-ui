import { LucideAlertTriangle, LucideCheckCircle, LucideInfo, LucideXCircle } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AlertContext } from "./alert.context";
import { type AlertVariants, alertVariants } from "./alert.variants";
import { useAlert } from "./use-alert";

// Root
export interface AlertProps extends AlertVariants, React.ComponentProps<"div"> {}

export const AlertRoot = ({ className, variant, ...props }: AlertProps) => {
  const slots = useMemo(() => alertVariants({ className, variant }), [className, variant]);

  return (
    <AlertContext value={{ slots, variant }}>
      <div
        className={cn(className, slots.root())}
        {...props}
      />
    </AlertContext>
  );
};

// Indicator
export interface AlertIndicatorProps extends React.ComponentProps<"div"> {}

export const AlertIndicator = ({ className, children, ...props }: AlertIndicatorProps) => {
  const { slots, variant } = useAlert();

  const IndicatorIcon = ({ children }: { children?: React.ReactNode }) => {
    if (children) return children;

    switch (variant) {
      case "danger":
        return <LucideXCircle />;
      case "success":
        return <LucideCheckCircle />;
      case "warning":
        return <LucideAlertTriangle />;
      default:
        return <LucideInfo />;
    }
  };

  return (
    <div
      className={cn(className, slots.indicator())}
      {...props}
    >
      <IndicatorIcon>{children}</IndicatorIcon>
    </div>
  );
};

// Content
export interface AlertContentProps extends React.ComponentProps<"div"> {}

export const AlertContent = ({ className, ...props }: AlertContentProps) => {
  const { slots } = useAlert();

  return (
    <div
      className={cn(className, slots.content())}
      {...props}
    />
  );
};

// Title
export interface AlertTitleProps extends React.ComponentProps<"div"> {}

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  const { slots } = useAlert();

  return (
    <div
      className={cn(className, slots.title())}
      {...props}
    />
  );
};

// Description
export interface AlertDescriptionProps extends React.ComponentProps<"div"> {}

export const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => {
  const { slots } = useAlert();

  return (
    <div
      className={cn(className, slots.description())}
      {...props}
    />
  );
};
