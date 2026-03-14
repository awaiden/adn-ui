<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Switch } from "./index";

const { Story } = defineMeta({
	title: "Components/Switch",
	tags: ["autodocs"],
	component: Switch,
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

<Story name="Default" args={{ checked: false }} />

<Story name="Small" args={{ size: "sm", checked: true }} />

<Story name="Large" args={{ size: "lg", checked: false }} />

<Story name="Disabled" args={{ disabled: true, checked: true }} />
