<!-- script -->
<script lang="ts">
	export let heading: string = '';
	export let small: string = '';
	export let content: string = '';
</script>

<!-- html -->
<div class="card">
	<h2>{heading}</h2>
	<small>{small}</small>
	<p>
		{@html content}
	</p>
</div>

<style>
	small {
		color: var(--text-2);
	}

	.card {
		display: grid;
		/* gap: 1ch; */
		border-radius: 10px;
		background: var(--surface-2);
		border: 1px solid var(--surface-3);
		padding: 1rem;
		margin: 1rem;
	}

	.card h2 {
		color: var(--text-1);
		font-size: 1.5rem;
		margin: 0;
	}

	p {
		max-inline-size: 60ch;
	}

	/* style for injected html, restricted to local selector */
	p :global(a) {
		color: var(--link);
		text-decoration: none;
	}

	p :global(a:hover) {
		color: var(text-2);
		font-weight: bold;
	}

</style>
