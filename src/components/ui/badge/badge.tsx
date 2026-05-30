import "./badge.css";

import { cn } from "tailwind-variants";

import { badgeVariants, type BadgeVariants } from "./badge.variants";

export type BadgeProps = BadgeVariants & React.ComponentProps<"span">;

export const Badge = ({ children, className, variant, ...props }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
};
