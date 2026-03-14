import { type BadgeVariants, badgeVariants } from "@adn-ui/core";

export type BadgeProps = React.ComponentProps<"span"> & BadgeVariants;

export default function Badge({ className, variant, ...props }: BadgeProps) {
	const styles = badgeVariants({ className, variant });

	return <span data-slot="badge" className={styles} {...props} />;
}
