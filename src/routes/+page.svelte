<!-- <script lang="ts">
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
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	export let pageData: PageData;

	let searchValue = '';
	let typedValue = '';

	const { form } = superForm(pageData.form);
</script>

<SuperDebug data={$form} />

<div class="relative md:container">
	<Card class="md:mx-20">
		<CardHeader>
			<CardTitle>Enter details the for your workout</CardTitle>
			<CardDescription>This is a description</CardDescription>
		</CardHeader>
		<CardContent>
			<WorkoutForm {form} />
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
null -->

<script lang="ts">
	import type { PageData } from '../routes/$types';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import WorkoutForm from '$lib/containers/forms/workout.svelte';
	import SuperDebug from 'sveltekit-superforms';

	export let data: PageData;
</script>

<!-- <SuperDebug data={data.form} /> -->
<div class="relative md:container">
	<Card class="md:mx-20 mt-[10%]">
		<CardHeader>
			<CardTitle>
				{#if data.form.data.stepNumber === 1}
				Where is the location of your workout?
				{:else}
				Enter details for your workout
				{/if}
			</CardTitle>
			<CardDescription>
				{#if data.form.data.stepNumber > 1}
				Complete your session details
				{/if}
			</CardDescription>
		</CardHeader>
		<CardContent>
			<WorkoutForm data={data.form} />
		</CardContent>
	</Card>
</div>
