import { SelectContent } from "./select-content";
import { SelectItem } from "./select-item";
import { SelectLabel } from "./select-label";
import { SelectRoot } from "./select-root";
import { SelectSeparator } from "./select-separator";
import { SelectTrigger } from "./select-trigger";

export const Select = {
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
};

export { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectSeparator, SelectTrigger };

export { SelectContext, useSelectContext } from "./select.context";

export { type SelectVariants, selectVariants } from "./select.variants";
