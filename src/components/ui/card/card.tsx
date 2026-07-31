"use client";

import "./card.css";

import type React from "react";

import { cn } from "tailwind-variants";

import { CardContext, useCardContext } from "./card.context";
import { cardVariants, type CardVariants } from "./card.variants";

export type CardProps = CardVariants & React.ComponentProps<"div">;

export const CardRoot = ({ children, className, variant, ...props }: CardProps) => {
  const slots = cardVariants({ variant });

  return (
    <CardContext.Provider value={{ slots }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

export type CardHeaderProps = React.ComponentProps<"div">;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  const { slots } = useCardContext();
  return <div className={cn(slots.header(), className)} {...props} />;
};

export type CardTitleProps = React.ComponentProps<"h3">;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  const { slots } = useCardContext();
  return <h3 className={cn(slots.title(), className)} {...props} />;
};

export type CardDescriptionProps = React.ComponentProps<"p">;

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  const { slots } = useCardContext();
  return <p className={cn(slots.description(), className)} {...props} />;
};

export type CardContentProps = React.ComponentProps<"div">;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  const { slots } = useCardContext();
  return <div className={cn(slots.content(), className)} {...props} />;
};

export type CardFooterProps = React.ComponentProps<"div">;

export const CardFooter = ({ className, ...props }: CardFooterProps) => {
  const { slots } = useCardContext();
  return <div className={cn(slots.footer(), className)} {...props} />;
};
