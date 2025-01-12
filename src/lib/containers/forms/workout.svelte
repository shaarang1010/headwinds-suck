<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { InfoIcon } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { formSchema, type FormSchema } from '../../../schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import ToggleGroup from '$lib/components/custom/toggle-group/toggle-group.svelte';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const toggleOptions = [
		{ label: 'Zone 1', val: 'zone1' },
		{ label: 'Zone 2', val: 'zone2' },
		{ label: 'Zone 3', val: 'zone3' },
		{ label: 'Zone 4', val: 'zone4' },
		{ label: 'Zone 5', val: 'zone5' }
	];
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="suburb">
		<Form.Control let:attrs>
			<Form.Label>Suburb</Form.Label>
			<slot />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="zone">
		<Form.Control let:attrs>
			<Form.Label>Zone</Form.Label>
			<ToggleGroup options={toggleOptions} value="zone2" />
			<Form.Description>Zones are based on your HR and/or FTP</Form.Description>
		</Form.Control>
	</Form.Field>
</form>
