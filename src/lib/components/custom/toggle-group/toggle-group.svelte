<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	let {
		options,
		value
	}: {
		value: string;
		options: { label: string; val: string }[];
	} = $props();
</script>

<ToggleGroup.Root
	type="single"
	{value}
	onValueChange={(val) => {
		if (val) {
			value = val;
		}
	}}
>
	{#each options as option}
		<ToggleGroup.Item value={option.val}>{option.label}</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
