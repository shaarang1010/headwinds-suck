<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { InfoIcon, ArrowRightCircle } from 'lucide-svelte';
	import Toggle from '$lib/components/custom/toggle/toggle.svelte';
	import { formSchema, type FormSchema } from '../../../schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Searchbox from '$lib/components/custom/searchbox/searchbox.svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const zoneToggleOptions = [
		{ label: 'Zone 1', val: 'zone1' },
		{ label: 'Zone 2', val: 'zone2' },
		{ label: 'Zone 3', val: 'zone3' },
		{ label: 'Zone 4', val: 'zone4' },
		{ label: 'Zone 5', val: 'zone5' }
	];
</script>

<form method="POST" use:enhance class="space-y-4">
	<Form.Field {form} name="suburb">
		<Form.Control let:attrs>
			<Form.Label>Search</Form.Label>
			<Form.Description>Search by your postcode or suburb</Form.Description>
			<!-- <Input {...attrs} bind:value={$formData.suburb} /> -->
			<Searchbox {...attrs} value={$formData.suburb} placeholder="Eg: Kew, 3101" searchValue="" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="zone">
		<Form.Control let:attrs>
			<Form.Label class="flex flex-row"
				>Zone
				<InfoIcon class="ml-2 h-4 w-4 text-gray-500" />
			</Form.Label>
			<Form.Description class="text-sm">Zones are based on your HR and/or FTP</Form.Description>
			<div class="flex-start flex flex-row justify-items-start">
				<Toggle options={zoneToggleOptions} value="zone2" />
			</div>
		</Form.Control>
	</Form.Field>
	<div class="flex flex-col items-center">
		<Form.Button>Get started <ArrowRightCircle class="ml-2 h-4 w-4" /></Form.Button>
	</div>
</form>
