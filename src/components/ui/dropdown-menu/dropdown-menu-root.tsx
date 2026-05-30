import "./dropdown-menu.css";

import { DropdownMenu } from "radix-ui";

import { DropdownMenuContext } from "./dropdown-menu.context";
import { dropdownMenuVariants } from "./dropdown-menu.variants";

export type DropdownMenuRootProps = React.ComponentProps<typeof DropdownMenu.Root>;

export const DropdownMenuRoot = (props: DropdownMenuRootProps) => {
  const slots = dropdownMenuVariants();

  return (
    <DropdownMenuContext value={{ slots }}>
      <DropdownMenu.Root {...props} />
    </DropdownMenuContext>
  );
};
