<script>
	import { Card } from '$lib/components';

	const cardContent = {
		heading: "What is okLCH?",
		small: 'A colour space!',
		content:
		`OKLCH is a colour space that offers up to 50% more colours than sRGB - <a href="https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/" target="_blank">go here for a Smashing Magazine article explaining more</a>.  <br />
		There\'s an amazing colour picker at <a href="https://oklch.com">oklch.com</a>.<br />And another with a great contrast checker at <a href="https://www.oddcontrast.com">oddcontrast.com</a>`

	};
</script>

<Card {...cardContent} />
