import "./aspect-ratio.css";

import { AspectRatio } from "radix-ui";
import { cn } from "tailwind-variants";

import { aspectRatioVariants } from "./aspect-ratio.variants";

export type AspectRatioProps = React.ComponentProps<typeof AspectRatio.Root>;

export const AspectRatioRoot = ({ className, ...props }: AspectRatioProps) => {
  const { root } = aspectRatioVariants();

  return <AspectRatio.Root className={cn(root(), className)} {...props} />;
};
