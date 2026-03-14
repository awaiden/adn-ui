<script lang="ts">
import { dropdownMenuVariants } from "@adn-ui/core";
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { setDropdownMenuContext } from "./dropdown-menu.context";

let { open = $bindable(false), ...rest }: DropdownMenuPrimitive.RootProps =
	$props();

const slots = dropdownMenuVariants();
setDropdownMenuContext({ slots });
</script>

<DropdownMenuPrimitive.Root bind:open {...rest}>
	{@render rest.children?.()}
</DropdownMenuPrimitive.Root>
