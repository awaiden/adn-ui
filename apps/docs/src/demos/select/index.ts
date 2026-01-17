import type { DemoItem } from "..";

import Default from "./default";

export const selectDemos: Record<string, DemoItem> = {
  select: {
    component: Default,
    file: "select/default.tsx",
  },
};
