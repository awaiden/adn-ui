import type { DemoItem } from "..";

import Default from "./default";
import Fallback from "./fallback";

export const avatarDemos: Record<string, DemoItem> = {
  avatar: {
    component: Default,
    file: "avatar/default.tsx",
  },
  "avatar-fallback": {
    component: Fallback,
    file: "avatar/fallback.tsx",
  },
};
