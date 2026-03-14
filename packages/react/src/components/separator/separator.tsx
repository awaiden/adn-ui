import { separatorVariants } from "@adn-ui/core";
import { Separator } from "radix-ui";

export type SeparatorProps = React.ComponentProps<typeof Separator.Root>;

export default function SeparatorRoot({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}: SeparatorProps) {
	const styles = separatorVariants({ orientation, className });

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
