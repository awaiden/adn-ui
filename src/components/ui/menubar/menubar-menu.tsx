import { Menubar } from "radix-ui";

export type MenubarMenuProps = React.ComponentProps<typeof Menubar.Menu>;

export const MenubarMenu = (props: MenubarMenuProps) => {
  return <Menubar.Menu {...props} />;
};
