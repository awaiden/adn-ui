import type { DemoItem } from "..";

import Default from "./default";
import Sizes from "./sizes";
import Variants from "./variants";

export const buttonDemos: Record<string, DemoItem> = {
  button: {
    component: Default,
    file: "button/default.tsx",
  },
  "button-sizes": {
    component: Sizes,
    file: "button/sizes.tsx",
  },
  "button-variants": {
    component: Variants,
    file: "button/variants.tsx",
  },
};
