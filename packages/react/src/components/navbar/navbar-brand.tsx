import { cn } from "@adn-ui/core";

import { useNavbarContext } from "./navbar-context";

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavbarBrand({ className, ...props }: NavbarBrandProps) {
  const { slots } = useNavbarContext();

  return <div data-slot="navbar-brand" className={cn(slots.brand(), className)} {...props} />;
}
