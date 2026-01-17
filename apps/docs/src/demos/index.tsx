import type { ComponentType } from "react";

import { accordionDemos } from "./accordion";
import { alertDemos } from "./alert";
import { alertDialogDemos } from "./alert-dialog";
import { autocompleteDemos } from "./autocomplete";
import { avatarDemos } from "./avatar";
import { buttonDemos } from "./button";
import { buttonGroupDemos } from "./button-group";
import { cardDemos } from "./card";
import { checkboxDemos } from "./checkbox";
import { checkboxGroupDemos } from "./checkbox-group";
import { chipDemos } from "./chip";
import { collapsibleDemos } from "./collapsible";
import { comboboxDemos } from "./combobox";
import { containerDemos } from "./container";
import { contextMenuDemos } from "./context-menu";
import { dialogDemos } from "./dialog";
import { drawerDemos } from "./drawer";
import { fieldDemos } from "./field";
import { fieldsetDemos } from "./fieldset";
import { formDemos } from "./form";
import { iconButtonDemos } from "./icon-button";
import { inputDemos } from "./input";
import { labelDemos } from "./label";
import { linkDemos } from "./link";
import { listDemos } from "./list";
import { menuDemos } from "./menu";
import { meterDemos } from "./meter";
import { navbarDemos } from "./navbar";
import { navigationMenuDemos } from "./navigation-menu";
import { numberFieldDemos } from "./number-field";
import { popoverDemos } from "./popover";
import { previewCardDemos } from "./preview-card";
import { progressDemos } from "./progress";
import { radioDemos } from "./radio";
import { radioGroupDemos } from "./radio-group";
import { scrollAreaDemos } from "./scroll-area";
import { selectDemos } from "./select";
import { separatorDemos } from "./separator";
import { sidebarDemos } from "./sidebar";
import { sliderDemos } from "./slider";
import { spinnerDemos } from "./spinner";
import { switchDemos } from "./switch";
import { tableDemos } from "./table";
import { tabsDemos } from "./tabs";
import { toggleButtonDemos } from "./toggle-button";
import { tooltipDemos } from "./tooltip";

export interface DemoItem {
  component: ComponentType;
  file: string;
}

export const demos: Record<string, DemoItem> = {
  ...progressDemos,
  ...inputDemos,
  ...radioDemos,
  ...sidebarDemos,
  ...meterDemos,
  ...listDemos,
  ...alertDialogDemos,
  ...navbarDemos,
  ...numberFieldDemos,
  ...checkboxGroupDemos,
  ...iconButtonDemos,
  ...cardDemos,
  ...spinnerDemos,
  ...avatarDemos,
  ...drawerDemos,
  ...buttonGroupDemos,
  ...accordionDemos,
  ...labelDemos,
  ...alertDemos,
  ...navigationMenuDemos,
  ...comboboxDemos,
  ...tooltipDemos,
  ...menuDemos,
  ...sliderDemos,
  ...chipDemos,
  ...linkDemos,
  ...autocompleteDemos,
  ...containerDemos,
  ...radioGroupDemos,
  ...tabsDemos,
  ...buttonDemos,
  ...collapsibleDemos,
  ...previewCardDemos,
  ...selectDemos,
  ...formDemos,
  ...separatorDemos,
  ...switchDemos,
  ...checkboxDemos,
  ...fieldDemos,
  ...popoverDemos,
  ...fieldsetDemos,
  ...contextMenuDemos,
  ...scrollAreaDemos,
  ...toggleButtonDemos,
  ...tableDemos,
  ...dialogDemos,
};
