"use client";

import "./avatar.css";

import type React from "react";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

import { AvatarContext, useAvatarContext } from "./avatar.context";
import { avatarVariants, type AvatarVariants } from "./avatar.variants";

export type AvatarProps = AvatarVariants & React.ComponentProps<typeof BaseAvatar.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/avatar/content.md
 */
export const AvatarRoot = ({ children, className, shape, size, ...props }: AvatarProps) => {
  const slots = avatarVariants({ shape, size });

  return (
    <AvatarContext.Provider value={{ slots }}>
      <BaseAvatar.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseAvatar.Root>
    </AvatarContext.Provider>
  );
};

export type AvatarImageProps = React.ComponentProps<typeof BaseAvatar.Image>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/avatar/content.md
 */
export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  const { slots } = useAvatarContext();
  return <BaseAvatar.Image className={cn(slots.image(), className)} {...props} />;
};

export type AvatarFallbackProps = React.ComponentProps<typeof BaseAvatar.Fallback>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/avatar/content.md
 */
export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  const { slots } = useAvatarContext();
  return <BaseAvatar.Fallback className={cn(slots.fallback(), className)} {...props} />;
};
