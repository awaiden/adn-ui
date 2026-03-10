import CardContent from "./card-content";
import CardDescription from "./card-description";
import CardHeader from "./card-header";
import CardRoot from "./card-root";
import CardTitle from "./card-title";

export const Card = {
	Root: CardRoot,
	Content: CardContent,
	Description: CardDescription,
	Header: CardHeader,
	Title: CardTitle,
};

export { CardRoot, CardContent, CardDescription, CardHeader, CardTitle };

export type CardRootProps = React.ComponentProps<typeof CardRoot>;
export type CardContentProps = React.ComponentProps<typeof CardContent>;
export type CardDescriptionProps = React.ComponentProps<typeof CardDescription>;
export type CardHeaderProps = React.ComponentProps<typeof CardHeader>;
export type CardTitleProps = React.ComponentProps<typeof CardTitle>;

export { type CardVariants, cardVariants } from "./card.variants";
