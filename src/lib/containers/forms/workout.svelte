<script lang="ts">
	import { superForm, type Infer, type SuperForm, type SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type WorkoutSchemaType } from '../../../schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
  import { InfoIcon } from "lucide-svelte";
	import { Button } from '$lib/components/ui/button';


	// export let data: SuperValidated<Infer<WorkoutSchemaType>>;

	// const form =superForm(
	//     data,
	//     {
	//         validators: zodClient(formSchema),
	//         resetForm: true,
	//         taintedMessage: null,

	//     }
	// )

	// // const { form: formData, errors, enhance, delayed, message } = form;
	// let { form : formData}:{
	//   form: SuperForm<WorkoutSchemaType>
	// } = $props();

	let suburb = $state('');
  let zone = $state('');
  let duration = $state({ hours: 0, minutes: 0 });
  let FTP = $state(0);
  let HR = $state({maxHR: 0, restHR: 0});
</script>

<form method="POST">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="col-span-2 flex flex-col gap-2">
			<Label class="text-md text-slate-600">Search for a location</Label>
			<Input class="text-md h-16" bind:value={suburb} />
		</div>
    <div class="flex flex-col">
      <div class="flex items-center">
      <Label class="text-md">Select your Zone</Label>
      <Button variant="ghost" size="icon" class="hover:bg-white" onclick={()=> alert("Hello")}>
       <InfoIcon class="text-slate-700 h-5 w-5" /> 
      </Button>
    </div>
      <p class="text-xs text-slate-500">Zones are based on your HR and/or FTP</p>
    </div>
	</div>
</form>
