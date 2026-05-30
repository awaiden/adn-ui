import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardHeader } from "./card-header";
import { CardRoot } from "./card-root";
import { CardTitle } from "./card-title";

export const Card = {
  Content: CardContent,
  Description: CardDescription,
  Header: CardHeader,
  Root: CardRoot,
  Title: CardTitle,
};

export { CardContent, CardDescription, CardHeader, CardRoot, CardTitle };

export { CardContext, useCardContext } from "./card.context";

export { type CardVariants, cardVariants } from "./card.variants";
