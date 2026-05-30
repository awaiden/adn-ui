import { Tabs } from "radix-ui";
import { cn } from "tailwind-variants";

import { useTabsContext } from "./tabs.context";

export type TabsTriggerProps = React.ComponentProps<typeof Tabs.Trigger>;

export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
  const { slots } = useTabsContext();

  return <Tabs.Trigger className={cn(slots.trigger(), className)} {...props} />;
};
