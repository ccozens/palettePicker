<script lang="ts">
	import { Card } from '$lib/components';
	import type { CardContent } from '$lib/types';

	const cardContent: CardContent = {
		heading: 'Palette picker',
	};
</script>

<Card {...cardContent} />
