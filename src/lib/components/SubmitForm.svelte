<script lang="ts">
	// You can use this to add functionality to your component.

	// this just allows us to pass the endpoint as a variable to this form so we can have a component
	// that stands alone and use it in the homepage.
	let { action } = $props();
</script>

<!-- the method=POST defines what http method we're using, and action is the url we're posting to-->

<form method="POST" action="?/{action}">
	<!--This is an input field for the username of the guestbook entry -->
	<!--Create another input field for the note -->
	<input type="text" name="user" placeholder="username" />

	<button type="submit">Submit</button>
</form>
