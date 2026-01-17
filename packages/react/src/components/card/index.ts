import { CardContent, CardDescription, CardHeader, CardRoot, CardTitle } from "./card";

// Compound Component
export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Description: CardDescription,
  Header: CardHeader,
  Root: CardRoot,
  Title: CardTitle,
});

// Named Component
export * from "./card";

// Variants
export type { CardVariants } from "./card.variants";
export { cardVariants } from "./card.variants";
