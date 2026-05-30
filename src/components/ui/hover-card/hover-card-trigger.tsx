import { HoverCard } from "radix-ui";

export type HoverCardTriggerProps = React.ComponentProps<typeof HoverCard.Trigger>;

export const HoverCardTrigger = (props: HoverCardTriggerProps) => {
  return <HoverCard.Trigger asChild {...props} />;
};
