import { surfaceVariants } from "@adn-ui/core";

export type SurfaceProps = React.ComponentProps<"div">;

export default function Surface({ className, ...props }: SurfaceProps) {
  const styles = surfaceVariants({ className });
  return <div className={styles} {...props} />;
}
