<!-- script -->
<script lang="ts">
	export let heading: string = '';
	export let small: string = '';
	export const content: string = '';
</script>

<!-- html -->
<div class="card">
	<h2>{heading}</h2>
	<small>{small}</small>
</div>

<style>
	small {
		color: var(--text-2);
	}

	h2 {
		color: var(--text-1);
		font-size: 1.5rem;
		margin: 0;
	}
</style>
