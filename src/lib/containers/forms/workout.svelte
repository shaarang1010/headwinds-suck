<script lang="ts">
    import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
    import {formSchema,  type WorkoutSchemaType} from "../../../schema";
    import { zodClient } from "sveltekit-superforms/adapters";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
	import { Field } from "formsnap";
    // export let data: SuperValidated<WorkoutSchemaType>;

    // const form =superForm(
    //     data,
    //     {
    //         validators: zodClient(formSchema),
    //         resetForm: true,
    //         taintedMessage: null,

    //     }
    // )

    // const { form: formData, errors, enhance, delayed, message } = form;
    let suburb = "";
</script>

<form method="POST">
    
      <!-- <Form.Control let:attrs>
        <Form.Label>Username</Form.Label>
        <Input {...attrs} bind:value={suburb} />
      </Form.Control>
      <Form.Description>This is your public display name.</Form.Description>
      <Form.FieldErrors />
    
    <Form.Button>Submit</Form.Button> -->
   <input type="text" bind:value={suburb} />
    <button type="submit">Submit</button> 
  </form>