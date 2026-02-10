import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { CardContext } from "./card.context";
import { type CardVariants, cardVariants } from "./card.variants";
import { useCard } from "./use-card";

export interface CardRootProps extends CardVariants, React.ComponentProps<"div"> {}

export const CardRoot = ({ className, variant, ...props }: CardRootProps) => {
  const slots = useMemo(() => cardVariants({ variant }), [variant]);

  return (
    <CardContext.Provider value={{ slots }}>
      <div
        className={cn(className, slots.root())}
        {...props}
      />
    </CardContext.Provider>
  );
};

export interface CardHeaderProps extends React.ComponentProps<"div"> {}

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  const { slots } = useCard();

  return (
    <div
      className={cn(className, slots.header())}
      {...props}
    />
  );
};

export interface CardContentProps extends React.ComponentProps<"div"> {}

export const CardContent = ({ className, ...props }: CardContentProps) => {
  const { slots } = useCard();

  return (
    <div
      className={cn(className, slots.content())}
      {...props}
    />
  );
};

export interface CardFooterProps extends React.ComponentProps<"div"> {}

export interface CardTitle extends React.ComponentProps<"h2"> {}

export const CardTitle = ({ className, children, ...props }: CardTitle) => {
  const { slots } = useCard();

  return (
    <h2
      className={cn(className, slots.title())}
      {...props}
    >
      {children}
    </h2>
  );
};

export interface CardDescriptionProps extends React.ComponentProps<"p"> {}

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  const { slots } = useCard();

  return (
    <p
      className={cn(className, slots.description())}
      {...props}
    />
  );
};
