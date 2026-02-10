import { Button as BaseButton } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { Spinner } from "../spinner";
import { type ButtonVariants, buttonVariants } from "./button.variants";

export type ButtonProps = ButtonVariants &
  BaseButton.Props & {
    isPending?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  isIconOnly,
  isPending,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const styles = buttonVariants({ isIconOnly, size, variant });

  const isDisabled = disabled || isPending;

  return (
    <BaseButton
      className={cn(styles, className)}
      disabled={isDisabled}
      data-disabled={isDisabled}
      data-pending={isPending}
      nativeButton={Boolean(props.render)}
      {...props}
    >
      {isPending && <Spinner />}
      {children}
    </BaseButton>
  );
};
