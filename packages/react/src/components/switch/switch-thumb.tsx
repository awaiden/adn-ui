import { Switch } from "radix-ui";

import { useSwitchContext } from "./switch-context";

export type SwitchThumbProps = React.ComponentProps<typeof Switch.Thumb>;

export default function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  const { slots } = useSwitchContext();

  return <Switch.Thumb className={slots.thumb({ className })} {...props} />;
}
