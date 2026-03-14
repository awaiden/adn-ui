import { type BadgeVariants, badgeVariants } from "@adn-ui/core";

export type BadgeProps = React.ComponentProps<"span"> & BadgeVariants;

export default function Badge({ variant, className, ...props }: BadgeProps) {
	const styles = badgeVariants({ variant, className });

	return <span data-slot="badge" className={styles} {...props} />;
}
