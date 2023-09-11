<!-- script -->
<script lang="ts">
	import { copy } from 'svelte-copy';

	export let buttonWidth = '80%';
	export let buttonHeight = '70%';
	export let displayText = 'Copy';
	export let copyText = 'Nothing to copy';
</script>

<!-- html -->
<button
	style="--button-width: {buttonWidth};
            --button-height: {buttonHeight};"
	use:copy={copyText}>{displayText}</button
>

<style>
	button {
		border: none;
		background: var(--surface-3);
		text-align: center;
		color: inherit;
		width: var(--button-width);
		height: var(--button-height);
		font-size: 1rem;
		padding: 0.5rem;
		border-radius: 0.25rem;
		box-shadow: inset 0 0 0 1px var(--surface-2);
		transition: box-shadow 0.2s ease-in-out;
	}

	button:hover {
		box-shadow: inset 0 0 0 1px var(--swatch-6), 0 0 0 2px var(--surface-3);
		cursor: copy;
	}

	button:active {
		background: var(--swatch-6);
		box-shadow: 0px 0px 10px 5px var(--swatch-6);
	}
</style>
