<script>
	import { Card } from '$lib/components';

	const cardContent = {
		heading: "I'm a card",
		small: 'I give credit',
		content:
			'This is based very heavily on <a href="https://github.com/argyleink/gui-challenges/tree/main/color-palettes">Adam Argyle\'s colour palette with OKLCH gui challenge</a>'
	};
</script>

<Card {...cardContent} />
