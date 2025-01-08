import { superValidate } from 'sveltekit-superforms';
import { formSchema } from '../schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	// Server API:
	const form = await superValidate(zod(formSchema));

	// Always return { form } in load and form actions.
	return { form };
};
