import { separatorVariants } from "@adn-ui/core";
import { Separator } from "radix-ui";

export type SeparatorProps = React.ComponentProps<typeof Separator.Root>;

export default function SeparatorRoot({
  className,
  decorative = true,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  const styles = separatorVariants({ className, orientation });

  return (
    <Separator.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={styles}
      {...props}
    />
  );
}
