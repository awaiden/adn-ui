import "./select.css";

import { Select } from "radix-ui";

import { SelectContext } from "./select.context";
import { selectVariants } from "./select.variants";

export type SelectRootProps = React.ComponentProps<typeof Select.Root>;

export const SelectRoot = (props: SelectRootProps) => {
  const slots = selectVariants();

  return (
    <SelectContext value={{ slots }}>
      <Select.Root {...props} />
    </SelectContext>
  );
};
