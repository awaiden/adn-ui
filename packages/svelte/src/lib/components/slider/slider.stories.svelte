<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Slider, SliderRoot } from "./index";

const { Story } = defineMeta({
	title: "Components/Slider",
	tags: ["autodocs"],
	component: SliderRoot,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
});
</script>

<Story name="Default" args={{ value: [50], max: 100, step: 1, type: "multiple", class: "w-64" }}>
	{#snippet children()}
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0} />
	{/snippet}
</Story>

<Story name="Range" args={{ value: [25, 75], max: 100, step: 1, type: "multiple", class: "w-64" }}>
	{#snippet children()}
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0} />
		<Slider.Thumb index={1} />
	{/snippet}
</Story>

<Story name="Single" args={{ value: 50, max: 100, step: 1, type: "single", class: "w-64" }}>
	{#snippet children()}
		<Slider.Track>
			<Slider.Range />
		</Slider.Track>
		<Slider.Thumb index={0} />
	{/snippet}
</Story>
