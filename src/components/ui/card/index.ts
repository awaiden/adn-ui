import { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from "./card";

export const Card = {
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Root: CardRoot,
  Title: CardTitle,
};

export { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle };

export type {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./card";

export { CardContext, useCardContext } from "./card.context";
export { type CardVariants, cardVariants } from "./card.variants";
