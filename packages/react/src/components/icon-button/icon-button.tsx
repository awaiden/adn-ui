"use client";

import { cn } from "tailwind-variants";

import { Button } from "../button";
import { type IconButtonVariants, iconButtonVariants } from "./icon-button.variants";

// Root
export type IconButtonProps = IconButtonVariants & React.ComponentProps<typeof Button>;

export const IconButton = ({ className, variant, size, isIconOnly, ...props }: IconButtonProps) => {
  const styles = iconButtonVariants({ isIconOnly, size, variant });

  return <Button className={cn(className, styles)} {...props} />;
};
