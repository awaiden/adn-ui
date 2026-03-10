import { useGroupContext } from "./group.context";

export type GroupPrefixProps = React.HTMLAttributes<HTMLDivElement>;

export const GroupPrefix = ({ className, ...props }: GroupPrefixProps) => {
	const { slots } = useGroupContext();

	return (
		<div
			data-slot="prefix"
			className={slots.prefix({ class: className })}
			{...props}
		/>
	);
};
