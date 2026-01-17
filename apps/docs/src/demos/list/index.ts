import type { DemoItem } from "..";

import Default from "./default";

export const listDemos: Record<string, DemoItem> = {
  list: {
    component: Default,
    file: "list/default.tsx",
  },
};
