import { Collapsible } from "radix-ui";

export type CollapsibleTriggerProps = React.ComponentProps<typeof Collapsible.Trigger>;

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  return <Collapsible.Trigger asChild {...props} />;
};
