<!-- script -->
<script lang="ts">
	import { copy } from 'svelte-copy';
	import CopyMaterialSymbols from '$lib/assets/copyMaterialSymbols.svelte';

	export let buttonWidth = '60%';
	export let buttonHeight = '70%';
	export let displayText = '';
	export let copyText = 'Nothing to copy';
	export let shadow1 = '1px';
	export let shadow2 = '2px';

	const fill = 'var(--swatch-1)';
</script>

<!-- html -->
{#if displayText === ''}
	<button
		style="--button-width: {buttonWidth};
            --button-height: {buttonHeight};
            --shadow1: {shadow1};
            --shadow2: {shadow2};
			--background: 'transparent';
			"
		use:copy={copyText}
	>
		<CopyMaterialSymbols {fill} />
	</button>
{:else}
	<button
		style="--button-width: {buttonWidth};
	--button-height: {buttonHeight};
	--shadow1: {shadow1};
	--shadow2: {shadow2};
	opacity: 1;
	font-weight: 600;
	padding: 0.7rem;"
		use:copy={copyText}>{displayText}</button
	>
{/if}

<style>
	button {
		border: none;
		background: var(--surface-3);
		background: transparent;
		color: inherit;
		width: var(--button-width);
		height: var(--button-height);
		padding: 0 0.7rem 0.7rem 0.7rem;
		margin: 0.2rem;
		border-radius: 0.25rem;
		box-shadow: inset 0 0 0 1px var(--surface-2);
		opacity: 0.5;
	}

	button:hover {
		background: var(--swatch-7);
		box-shadow: 0 0 0 var(--shadow1) var(--swatch-5), 0 0 0 calc(var(--shadow2)) var(--surface-3);
		transform: translateY(-2px);
		cursor: copy;
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	button:active {
		background: var(--swatch-6);
		transform: scale(1.05);
		box-shadow: 0px 0px 10px 5px var(--swatch-6), 0px 0px 15px 5px var(--swatch-6);
	}
</style>
