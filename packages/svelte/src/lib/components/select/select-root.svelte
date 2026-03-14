<script lang="ts">
import { selectVariants } from "@adn-ui/core";
import { Select as SelectPrimitive } from "bits-ui";
import { setSelectContext } from "./select.context.js";

let { ...rest }: SelectPrimitive.RootProps = $props();

const slots = selectVariants();
setSelectContext({ slots });
</script>


<SelectPrimitive.Root	{...rest as any} />
