import type { DemoItem } from "..";

import Default from "./default";

export const autocompleteDemos: Record<string, DemoItem> = {
  autocomplete: {
    component: Default,
    file: "autocomplete/default.tsx",
  },
};
