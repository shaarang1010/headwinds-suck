<script lang="ts">
    import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
    import {formSchema, type FormSchema} from "../../../schema";
    import { zodClient } from "sveltekit-superforms/adapters";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    export let data: SuperValidated<Infer<FormSchema>>;

    const form =superForm(
        data,
        {
            validators: zodClient(formSchema),
            resetForm: true,
            taintedMessage: null,

        }
    )

    const { form: formData, errors, enhance, delayed, message } = form;
</script>

<form method="POST" use:enhance>
    <Form.Field {form} name="suburb">
      <Form.Control let:attrs>
        <Form.Label>Username</Form.Label>
        <Input {...attrs} bind:value={$formData.suburb} />
      </Form.Control>
      <Form.Description>This is your public display name.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Submit</Form.Button>
  </form>