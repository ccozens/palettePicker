<!-- https://joyofcode.xyz/sveltekit-google-analytics -->

<script lang="ts">
	import { page } from '$app/stores';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'MEASUREMENT_ID', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

	const MEASUREMENT_ID = 'G-967PD61XSL';
	const src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
</script>

<svelte:head>
	<script async {src}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', { MEASUREMENT_ID });
	</script>
</svelte:head>
