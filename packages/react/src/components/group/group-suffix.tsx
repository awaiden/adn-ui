import { useGroupContext } from "./group.context";

export type GroupSuffixProps = React.HTMLAttributes<HTMLDivElement>;

export const GroupSuffix = ({ className, ...props }: GroupSuffixProps) => {
  const { slots } = useGroupContext();

  return <div data-slot="suffix" className={slots.suffix({ class: className })} {...props} />;
};
