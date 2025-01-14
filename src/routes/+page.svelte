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
	import SettingsForm from '../lib/containers/forms/workout.svelte';
	export let data: PageData;
</script>

<SettingsForm data={data.form} />
