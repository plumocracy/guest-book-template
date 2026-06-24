import type { Actions } from "@sveltejs/kit";

import { db } from "$lib/server/db";



// This file lets you dictate what happens when the user submits your form.
// You can get all the form data here, and then send it to your database!!

export const actions = {
	submitEntry: async ({ request }) => {
		// This gets all the named fields from that form component
		const data = await request.formData();
		// This gets the user string from the form data.
		const user = data.get('user');

		// Try creating a constant that gets the note field you made, and then print it to the console :) 

		console.log(user)

	}
} satisfies Actions;
