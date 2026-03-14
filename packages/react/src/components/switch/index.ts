import SwitchRoot from "./switch-root";
import SwitchThumb from "./switch-thumb";

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

export { SwitchRoot, SwitchThumb };

export type SwitchRootProps = React.ComponentProps<typeof SwitchRoot>;
export type SwitchThumbProps = React.ComponentProps<typeof SwitchThumb>;

export { type SwitchVariants, switchVariants } from "@adn-ui/core";
