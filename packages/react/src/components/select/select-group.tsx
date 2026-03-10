import { Select } from "radix-ui";

export type SelectGroupProps = React.ComponentProps<typeof Select.Group>;

export default function SelectGroup(props: SelectGroupProps) {
	return <Select.Group data-slot="select-group" {...props} />;
}
