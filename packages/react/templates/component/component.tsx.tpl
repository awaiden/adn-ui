import {
  type {{Pascal}}Variants,
  {{camel}}Variants,
} from "./{{kebab}}.variants";
import { cn } from "tailwind-variants";

// Root
interface {{Pascal}}Props extends {{Pascal}}Variants, React.ComponentProps<"div"> {}

const {{Pascal}} = ({ className, ...props }: {{Pascal}}Props) => {
  const styles = {{camel}}Variants();
  return (
    <div
      className={cn(className, styles)}
      {...props}
    />
  );
};

export default {{Pascal}};