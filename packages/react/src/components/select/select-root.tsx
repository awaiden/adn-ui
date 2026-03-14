import { selectVariants } from "@adn-ui/core";
import { Select } from "radix-ui";

import { SelectContext } from "./select-context";

export type SelectRootProps = React.ComponentProps<typeof Select.Root>;

export default function SelectRoot(props: SelectRootProps) {
  const slots = selectVariants();

  return (
    <SelectContext value={{ slots }}>
      <Select.Root data-slot="select-root" {...props} />
    </SelectContext>
  );
}
