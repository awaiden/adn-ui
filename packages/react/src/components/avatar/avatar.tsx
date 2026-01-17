"use client";

import { Avatar as BaseAvatar } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AvatarContext } from "./avatar.context";
import { type AvatarVariants, avatarVariants } from "./avatar.variants";
import { useAvatar } from "./use-avatar";

export interface AvatarProps extends AvatarVariants, BaseAvatar.Root.Props {}

export const AvatarRoot = ({ className, size, ...props }: AvatarProps) => {
  const slots = useMemo(() => avatarVariants({ size }), [size]);

  return (
    <AvatarContext.Provider value={{ slots }}>
      <BaseAvatar.Root className={cn(className, slots.root())} {...props} />
    </AvatarContext.Provider>
  );
};

export interface AvatarImageProps extends BaseAvatar.Image.Props {}

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  const { slots } = useAvatar();

  return <BaseAvatar.Image className={cn(className, slots.image())} {...props} />;
};

export interface AvatarFallbackProps extends BaseAvatar.Fallback.Props {}

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  const { slots } = useAvatar();

  return <BaseAvatar.Fallback className={cn(className, slots.fallback())} {...props} />;
};
