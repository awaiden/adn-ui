import { surfaceVariants } from "./surface.variants";

export type SurfaceProps = React.ComponentProps<"div">;

export default function Surface({ className, ...props }: SurfaceProps) {
	const styles = surfaceVariants({ className });
	return <div className={styles} {...props} />;
}
