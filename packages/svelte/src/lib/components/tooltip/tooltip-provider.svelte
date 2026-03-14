<script lang="ts">
import { Tooltip as TooltipPrimitive } from "bits-ui";

let { children, ...rest }: TooltipPrimitive.ProviderProps = $props();
</script>

<TooltipPrimitive.Provider {...rest}>
	{@render children?.()}
</TooltipPrimitive.Provider>
