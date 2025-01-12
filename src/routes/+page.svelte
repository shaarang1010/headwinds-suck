<script lang="ts">
	import Searchbox from '$lib/components/custom/searchbox/searchbox.svelte';
	import ToggleGroup from '$lib/components/custom/toggle-group/toggle-group.svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import WorkoutForm from '$lib/containers/forms/workout.svelte';
	import type { PageData } from './$types';
	export let pageData: PageData;

	let searchValue = '';
	let typedValue = '';
</script>

<div class="relative md:container">
	<Card class="md:mx-20">
		<CardHeader>
			<CardTitle>Enter details the for your workout</CardTitle>
			<CardDescription>This is a description</CardDescription>
		</CardHeader>
		<CardContent>
			<!-- {#if pageData.form !== undefined}
				<WorkoutForm data={pageData.form}>
					<Searchbox
						placeholder="Search by postcode or Suburb"
						value={searchValue}
						searchValue={typedValue}
					/>
				</WorkoutForm>
			{/if} -->
			<ToggleGroup
				options={[
					{ label: 'Zone 1', val: 'zone1' },
					{ label: 'Zone 2', val: 'zone2' },
					{ label: 'Zone 3', val: 'zone3' },
					{ label: 'Zone 4', val: 'zone4' },
					{ label: 'Zone 5', val: 'zone5' }
				]}
				value="zone2"
			/>
		</CardContent>
	</Card>
</div>
null
