import { GroupContext } from "./group.context";
import { type GroupVariants, groupVariants } from "./group.variants";

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
