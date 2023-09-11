<!-- script -->
<script lang="ts">
	import { copy } from 'svelte-copy';

	export let buttonWidth = '80%';
	export let buttonHeight = '70%';
	export let displayText = 'Copy';
	export let copyText = 'Nothing to copy';
    export let shadow1 = '1px';
    export let shadow2 = '2px';
</script>

<!-- html -->
<button
	style="--button-width: {buttonWidth};
            --button-height: {buttonHeight};
            --shadow1: {shadow1};
            --shadow2: {shadow2};"

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
	}

	button:hover {
        background: var(--swatch-7);
		box-shadow:  0 0 0 var(--shadow1) var(--swatch-5), 0 0 0 calc(var(--shadow2)) var(--surface-3);
        transform: translateY(-2px);
		cursor: copy;
        transition: all 0.2s ease-in-out;
        font-weight: 600;
	}

	button:active {
		background: var(--swatch-6);
        transform: scale(1.05);
		box-shadow: 0px 0px 10px 5px var(--swatch-6),
                    0px 0px 15px 5px var(--swatch-6);
	}
</style>
