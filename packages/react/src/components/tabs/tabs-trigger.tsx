import { Tabs } from "radix-ui";
import { useTabsContext } from "./tabs-context";

export type TabsTriggerProps = React.ComponentProps<typeof Tabs.Trigger>;

export default function TabsTrigger({ className, ...props }: TabsTriggerProps) {
	const { slots } = useTabsContext();

	return <Tabs.Trigger className={slots.trigger({ className })} {...props} />;
}
