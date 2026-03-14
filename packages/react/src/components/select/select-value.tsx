import { Select } from "radix-ui";

export type SelectValueProps = React.ComponentProps<typeof Select.Value>;

export default function SelectValue(props: SelectValueProps) {
  return <Select.Value data-slot="select-value" {...props} />;
}
