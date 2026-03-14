<script lang="ts">
import { RadioGroup } from "./index";

let { value = $bindable("default") } = $props();
</script>

<RadioGroup.Root bind:value data-testid="root">
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="default" id="r1" data-testid="item-1">
			<RadioGroup.Indicator data-testid="indicator-1" />
		</RadioGroup.Item>
		<label for="r1">Default</label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="comfortable" id="r2" data-testid="item-2">
			<RadioGroup.Indicator data-testid="indicator-2" />
		</RadioGroup.Item>
		<label for="r2">Comfortable</label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="compact" id="r3" data-testid="item-3">
			<RadioGroup.Indicator data-testid="indicator-3" />
		</RadioGroup.Item>
		<label for="r3">Compact</label>
	</div>
</RadioGroup.Root>
