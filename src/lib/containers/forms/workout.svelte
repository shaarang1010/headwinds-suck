<script lang="ts">
    import { superForm, type Infer, type SuperForm, type SuperValidated } from "sveltekit-superforms";
    import {formSchema,  type WorkoutSchemaType} from "../../../schema";
    import { zodClient } from "sveltekit-superforms/adapters";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
  
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

    let suburb = $state("");
</script>

<form method="POST">
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col gap-2">
    <Label class="text-lg text-slate-600">Search for a location</Label>
    <Input class="h-16" bind:value={suburb} />
    </div>
    <div class="flex flex-col gap-2">
      <Label class="text-lg text-slate-500">Search for a location</Label>
      <Input class="h-16" bind:value={suburb} />
      </div>
  </div>
  </form>