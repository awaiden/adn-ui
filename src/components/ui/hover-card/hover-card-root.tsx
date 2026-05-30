import "./hover-card.css";

import { HoverCard } from "radix-ui";

export type HoverCardRootProps = React.ComponentProps<typeof HoverCard.Root>;

export const HoverCardRoot = (props: HoverCardRootProps) => {
  return <HoverCard.Root {...props} />;
};
