<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Skeleton } from "./index";

const { Story } = defineMeta({
	title: "Components/Skeleton",
	tags: ["autodocs"],
	component: Skeleton,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["default", "circular"],
		},
	},
});
</script>

<Story name="Default" args={{ class: "h-4 w-[250px]" }} />

<Story name="Circular" args={{ variant: "circular", class: "size-12" }} />
