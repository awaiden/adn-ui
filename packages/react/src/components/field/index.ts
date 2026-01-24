import { Checkbox } from "./checkbox";
import { CheckboxGroup } from "./checkbox-group";
import { ErrorMessage } from "./error-message";
import { HelperText } from "./helper-text";
import { Input } from "./input";
import { Label } from "./label";
import { Radio } from "./radio";
import { RadioGroup } from "./radio-group";
import { Root } from "./root";
import { Select } from "./select";
import { Switch } from "./switch";
import { TextArea } from "./textarea";

// Subcomponents are attached to Field object, not exported directly to avoid collision with standalone components
export { Root } from "./root"; // Export Root as it's the base for Field (or maybe unnecessary if Field is Root)

export * from "./use-field";
export * from "./context";

export const Field = Object.assign(Root, {
  Checkbox,
  CheckboxGroup,
  ErrorMessage,
  HelperText,
  Input,
  Label,
  Radio,
  RadioGroup,
  Root,
  Select,
  Switch,
  TextArea,
});
