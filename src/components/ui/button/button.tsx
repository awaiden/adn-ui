import "./button.css";

import type React from "react";

import { cn } from "tailwind-variants";

import { buttonVariants, type ButtonVariants } from "./button.variants";

export interface ButtonProps extends ButtonVariants, React.ComponentProps<"button"> {}

export const Button = ({
  children,
  className,
  isIconOnly,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const styles = cn(buttonVariants({ isIconOnly, size, variant }), className);

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
