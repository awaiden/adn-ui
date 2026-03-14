"use client";

import { Avatar } from "@adn-ui/react";

const Default = () => (
  <Avatar.Root size="md">
    <Avatar.Image src="https://avatars.githubusercontent.com/u/84444757?v=4" alt="Avatar" />
    <Avatar.Fallback>AW</Avatar.Fallback>
  </Avatar.Root>
);

export const Fallback = () => (
  <Avatar.Root size="md">
    <Avatar.Fallback>AW</Avatar.Fallback>
  </Avatar.Root>
);

export const Sizes = () => {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <Avatar.Root key={size} size={size}>
          <Avatar.Image src="https://avatars.githubusercontent.com/u/84444757?v=4" alt="Avatar" />
          <Avatar.Fallback>AW</Avatar.Fallback>
        </Avatar.Root>
      ))}
    </div>
  );
};

export const AvatarExample = {
  Default,
  Fallback,
  Sizes,
};
