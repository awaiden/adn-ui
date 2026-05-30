import { Tabs } from "radix-ui";
import { cn } from "tailwind-variants";

import { useTabsContext } from "./tabs.context";

export type TabsContentProps = React.ComponentProps<typeof Tabs.Content>;

export const TabsContent = ({ className, ...props }: TabsContentProps) => {
  const { slots } = useTabsContext();

  return <Tabs.Content className={cn(slots.content(), className)} {...props} />;
};
