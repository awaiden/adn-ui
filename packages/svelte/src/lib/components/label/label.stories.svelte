<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Label } from "./index";

const { Story } = defineMeta({
	title: "Components/Label",
	tags: ["autodocs"],
	component: Label,
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
	},
});
</script>

<Story name="Default">
	Default Label
</Story>

<Story name="Small" args={{ size: "sm",  }}>
	Small Label
</Story>

<Story name="Medium" args={{ size: "md",  }}>
	Medium Label
</Story>

<Story name="Large" args={{ size: "lg",  }}>
	Large Label
</Story>
