<!-- script -->
<script lang="ts">
	import { swatches, derivedSwatches } from '$lib/stores/values';
	import UpdateSwatch from './UpdateSwatch.svelte';
</script>

<!-- html -->

<hr />
<h2>Swatches</h2>
{#each $swatches as swatch}
	<p>{swatch.name}</p>
{/each}
<br />

<hr />
<div style="display:flex; ">
	{#each $derivedSwatches as derivedSwatch}
		<div style="display:flex; flex-direction: column; font-size: medium;">
			<div>{derivedSwatch.colour}</div>
			<div style="width: 100px; height: 100px; background-color: {derivedSwatch.colour}" />
		</div>
	{/each}
</div>
<UpdateSwatch />
