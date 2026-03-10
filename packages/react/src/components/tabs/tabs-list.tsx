import { Tabs } from "radix-ui";
import { useTabsContext } from "./tabs-context";

export type TabsListProps = React.ComponentProps<typeof Tabs.List>;

export default function TabsList({ className, ...props }: TabsListProps) {
	const { slots } = useTabsContext();

	return <Tabs.List className={slots.list({ className })} {...props} />;
}
