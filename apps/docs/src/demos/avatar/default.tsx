"use client";

import { Avatar } from "@adn-ui/react";

export default function Default() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://avatars.githubusercontent.com/u/84444757?s=96&v=4" />
      <Avatar.Fallback>HA</Avatar.Fallback>
    </Avatar.Root>
  );
}
