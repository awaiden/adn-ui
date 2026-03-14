<script lang="ts">
import { Slider } from "./index.js";

let { value = $bindable([50]), type = "multiple", ...rest } = $props();
</script>

<Slider.Root bind:value {type} data-testid="slider" {...rest}>
	<Slider.Track data-testid="slider-track">
		<Slider.Range data-testid="slider-range" />
	</Slider.Track>
	{#each value as _, i}
		<Slider.Thumb index={i} data-testid="slider-thumb-{i}" />
	{/each}
</Slider.Root>
