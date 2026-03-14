import { type GroupVariants, groupVariants } from "@adn-ui/core";
import { GroupContext } from "./group.context";

export type GroupRootProps = React.HTMLAttributes<HTMLDivElement> &
	GroupVariants;

export const GroupRoot = ({ className, ...props }: GroupRootProps) => {
	const slots = groupVariants();

	return (
		<GroupContext.Provider value={{ slots }}>
			<div className={slots.root({ class: className })} {...props} />
		</GroupContext.Provider>
	);
};
