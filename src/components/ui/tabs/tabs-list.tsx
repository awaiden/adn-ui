import { Tabs } from "radix-ui";
import { cn } from "tailwind-variants";

import { useTabsContext } from "./tabs.context";

export type TabsListProps = React.ComponentProps<typeof Tabs.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
  const { slots } = useTabsContext();

  return <Tabs.List className={cn(slots.list(), className)} {...props} />;
};
