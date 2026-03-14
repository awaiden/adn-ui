import { type TabsVariants, tabsVariants } from "@adn-ui/core";
import { Tabs } from "radix-ui";
import { TabsContext } from "./tabs-context";

export type TabsRootProps = React.ComponentProps<typeof Tabs.Root> &
	TabsVariants;

export default function TabsRoot({
	variant,
	className,
	...props
}: TabsRootProps) {
	const slots = tabsVariants({ variant });

	return (
		<TabsContext value={{ slots }}>
			<Tabs.Root className={slots.root({ className })} {...props} />
		</TabsContext>
	);
}
