<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Input } from "./index";

const { Story } = defineMeta({
	title: "Components/Input",
	tags: ["autodocs"],
	component: Input,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
		placeholder: {
			control: { type: "text" },
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
});
</script>

<Story name="Default" args={{ placeholder: "Email" }} />

<Story name="Small" args={{ size: "sm", placeholder: "Small input" }} />

<Story name="Large" args={{ size: "lg", placeholder: "Large input" }} />

<Story name="Disabled" args={{ disabled: true, placeholder: "Disabled input" }} />

<Story name="File" args={{ type: "file" }} />
