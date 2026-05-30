import "./tabs.css";

import { Tabs } from "radix-ui";
import { cn } from "tailwind-variants";

import { TabsContext } from "./tabs.context";
import { tabsVariants } from "./tabs.variants";

export type TabsRootProps = React.ComponentProps<typeof Tabs.Root>;

export const TabsRoot = ({ className, ...props }: TabsRootProps) => {
  const slots = tabsVariants();

  return (
    <TabsContext value={{ slots }}>
      <Tabs.Root className={cn(slots.root(), className)} {...props} />
    </TabsContext>
  );
};
