<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Toggle } from "./index";

const { Story } = defineMeta({
	title: "Components/Toggle",
	tags: ["autodocs"],
	component: Toggle,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "outline"],
		},
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

<Story name="Default" args={{ pressed: false }}>
	B
</Story>

<Story name="Outline" args={{ variant: "outline", pressed: false }}>
	I
</Story>

<Story name="Small" args={{ size: "sm" }}>
	U
</Story>

<Story name="Large" args={{ size: "lg" }}>
	Large
</Story>
