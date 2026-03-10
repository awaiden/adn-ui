import { Tabs } from "radix-ui";
import { useTabsContext } from "./tabs-context";

export type TabsContentProps = React.ComponentProps<typeof Tabs.Content>;

export default function TabsContent({ className, ...props }: TabsContentProps) {
	const { slots } = useTabsContext();

	return <Tabs.Content className={slots.content({ className })} {...props} />;
}
