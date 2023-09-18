<!-- script -->
<script lang="ts">
	import { copy } from 'svelte-copy';
	import CopyMaterialSymbols from '$lib/assets/copyMaterialSymbols.svelte';


	export let buttonWidth = '60%';
	export let buttonHeight = '70%';
	export let displayText = '';
	export let copyText = 'Nothing to copy';


	const fill = 'var(--swatch-1)';
</script>

<!-- html -->
{#if displayText === ''}
	<button
		style="--button-width: {buttonWidth};
				--button-height: {buttonHeight};
				--background: 'transparent';
			"
		use:copy={copyText}
	>
		<CopyMaterialSymbols {fill} />
	</button>
{:else}
	<div class="copyHighlight">
		<button
			style="--button-width: {buttonWidth};
				--button-height: {buttonHeight};
				box-shadow: none;
				opacity: 1;
				font-weight: 600;
				padding: 0.7rem;
				margin: 0;
			"
			use:copy={copyText}>{displayText}</button
		>
	</div>
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
		opacity: 0.5;
	}

	button:hover {
		background: var(--swatch-7);
		box-shadow: 0 0 1px 2px var(--surface-3);
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

	.copyHighlight {
		border-radius: 0.25rem;
		box-shadow: 0px 0px 5px 5px var(--swatch-6), 0px 0px 8px 8px var(--swatch-6);
	}

	.copyHighlight > button:hover {
		transform: none;
	}
</style>
