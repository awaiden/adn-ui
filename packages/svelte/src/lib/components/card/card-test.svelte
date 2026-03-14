<script lang="ts">
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./index";

let {
	title = "Card Title",
	description = "Card Description",
	content = "Card Content",
	...rest
} = $props();
</script>

<Card data-testid="card" {...rest}>
	<CardHeader>
		<CardTitle>{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	</CardHeader>
	<CardContent>{content}</CardContent>
</Card>
