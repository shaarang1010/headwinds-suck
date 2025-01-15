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
	<div class="flex w-[100%] flex-row space-x-4">
		{#each options as option}
			<ToggleGroup.Item value={option.val}>{option.label}</ToggleGroup.Item>
		{/each}
	</div>
</ToggleGroup.Root>
