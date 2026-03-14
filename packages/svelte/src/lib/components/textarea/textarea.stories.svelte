<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Textarea } from "./index";

const { Story } = defineMeta({
	title: "Components/Textarea",
	tags: ["autodocs"],
	component: Textarea,
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

<Story name="Default" args={{ placeholder: "Type your message here." }} />

<Story name="Small" args={{ size: "sm", placeholder: "Small textarea" }} />

<Story name="Large" args={{ size: "lg", placeholder: "Large textarea" }} />

<Story name="Disabled" args={{ disabled: true, placeholder: "Disabled textarea" }} />
